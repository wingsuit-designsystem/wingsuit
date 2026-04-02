import chalk from 'chalk';
import path from 'path';
import { hasYarn } from './has_yarn';

const logger = console;

const { spawnSync } = require('child_process');
const fs = require('fs');
const glob = require('glob');
const mv = require('mv');
const rimraf = require('rimraf');

export default (options) => {
  const welcomeMessage = 'ws init - the simplest way to install Wingsuit.';
  logger.log(chalk.inverse(`\n ${welcomeMessage} \n`));
  const useYarn = Boolean(options.useNpm !== true) && hasYarn();
  const branch = options.branch != null ? options.branch : '2.0.x';
  const tmpCheckoutFolder = 'wscheckout';
  const folder = !options.folder ? path.resolve('wingsuit') : path.resolve(options.folder);
  const npmOptions = {
    useYarn,
    checkoutFolder: path.join(folder, '../'),
    gitFolder: path.join(folder, '../', tmpCheckoutFolder),
    targetFolder: folder,
    branch,
    starterKit: options.starterKit != null ? options.starterKit : 'tailwind',
    smokeTest: options.smokeTest,
    skipInstall: options.skipInstall,
  };
  const cmdOptions = { stdio: 'inherit', cwd: npmOptions.checkoutFolder };
  const gitOptions = { cwd: npmOptions.gitFolder };
  const localRepo = process.env.WINGSUIT_LOCAL_REPO;
  const localRepoPackageFile = localRepo ? path.join(localRepo, 'package.json') : '';

  const getInstalledVersion = (packageName) => {
    if (!localRepo) {
      return null;
    }

    try {
      const packageFile = path.join(localRepo, 'node_modules', packageName, 'package.json');
      return JSON.parse(fs.readFileSync(packageFile, 'utf8')).version;
    } catch (e) {
      return null;
    }
  };

  const getLocalWorkspaceMap = () => {
    if (!localRepo) {
      return new Map();
    }

    const packageFiles = glob.sync('{packages,presets}/*/package.json', {
      cwd: localRepo,
      absolute: true,
    });

    return packageFiles.reduce((map, packageFile) => {
      const pkg = JSON.parse(fs.readFileSync(packageFile, 'utf8'));
      map.set(pkg.name, path.dirname(packageFile));
      return map;
    }, new Map());
  };

  const rewriteWorkspaceDeps = (pkg) => {
    const workspaceMap = getLocalWorkspaceMap();
    if (localRepo && fs.existsSync(localRepoPackageFile)) {
      const rootPkg = JSON.parse(fs.readFileSync(localRepoPackageFile, 'utf8'));
      const yoctoQueueVersion = getInstalledVersion('yocto-queue');

      pkg.resolutions = {
        ...(rootPkg.resolutions || {}),
        ...(pkg.resolutions || {}),
      };

      if (yoctoQueueVersion) {
        pkg.resolutions['yocto-queue'] = yoctoQueueVersion;
      }
    }

    ['dependencies', 'devDependencies', 'optionalDependencies'].forEach((section) => {
      const deps = pkg[section];
      if (!deps) {
        return;
      }

      Object.keys(deps).forEach((key) => {
        const localPath = workspaceMap.get(key);
        if (localPath) {
          deps[key] = `file:${localPath}`;
        }
      });
    });

    return pkg;
  };

  // Removes the \n from the stringified buffer
  const extractHash = (buffer) => {
    const arr = buffer.toString('utf8').split('\n');
    return arr[0];
  };

  const exitOnFailure = (result, message) => {
    if (result.status !== 0) {
      logger.error(message);
      process.exit(typeof result.status === 'number' ? result.status : 1);
    }
  };

  /*
   * Function fetches the tags off the repository and then pulls
   * the latest tag, rather than the current HEAD of master.
   */
  const checkoutLatestTag = () => {
    if (npmOptions.branch === 'stable') {
      logger.log('Checking out latest tag...');
      // Make sure to fetch the tags to pull the latest
      spawnSync('git', ['fetch', '--tags'], gitOptions);

      // Pull the latest tag from the repository
      const pullTag = spawnSync('git', ['rev-list', '--tags', '--max-count=1'], gitOptions);
      const tagHash = extractHash(pullTag.output[1]);
      // Checkout the local repo to the latest tag
      spawnSync('git', ['checkout', tagHash], gitOptions);
    } else if (npmOptions.branch !== 'master') {
      // Checkout provided branch
      spawnSync('git', ['fetch', '--all'], gitOptions);
      spawnSync('git', ['checkout', npmOptions.branch], gitOptions);
    }
    const pkgFile = `${npmOptions.gitFolder}/starter-kits/${npmOptions.starterKit}/package.json`;
    const pkg = rewriteWorkspaceDeps(JSON.parse(fs.readFileSync(pkgFile)));
    Object.keys(pkg.devDependencies).forEach((key) => {
      if (
        key.indexOf('@wingsuit-designsystem/') === 0 &&
        !String(pkg.devDependencies[key]).startsWith('file:')
      ) {
        pkg.devDependencies[key] = `^${pkg.devDependencies[key]}`;
      }
    });
    fs.writeFileSync(pkgFile, JSON.stringify(pkg, null, 4));
  };

  /*
   * npm commands must be run synchronously.
   * `npm run setup` utilizes dependencies initialized with `npm install`
   */
  const setupWingsuit = () => {
    // This function must complete before the subsequent installs can be ran.
    checkoutLatestTag();
    mv(
      `${npmOptions.gitFolder}/starter-kits/${npmOptions.starterKit}`,
      npmOptions.targetFolder,
      (err) => {
        rimraf.sync(npmOptions.gitFolder);
        cmdOptions.cwd = npmOptions.targetFolder;
        if (!npmOptions.skipInstall) {
          logger.log('Running Wingsuit dependency installation...');
          if (useYarn) {
            exitOnFailure(
              spawnSync('yarn', ['install'], cmdOptions),
              'Wingsuit dependency installation failed.'
            );
            logger.log('Running Wingsuit setup...');
            const startArgs = ['dev:storybook'];
            if (npmOptions.smokeTest) {
              startArgs.push('--smoke-test');
            }
            exitOnFailure(spawnSync('yarn', startArgs, cmdOptions), 'Wingsuit setup failed.');
          } else {
            exitOnFailure(
              spawnSync('npm', ['install'], cmdOptions),
              'Wingsuit dependency installation failed.'
            );
            logger.log('Running Wingsuit setup...');
            const startArgs = ['run', 'dev:storybook'];
            if (npmOptions.smokeTest) {
              startArgs.push('--smoke-test');
            }
            exitOnFailure(spawnSync('npm', startArgs, cmdOptions), 'Wingsuit setup failed.');
          }
        }
      }
    );
  };
  logger.log('Cloning Wingsuit repo ...');
  if (!fs.existsSync(npmOptions.checkoutFolder)) {
    fs.mkdirSync(npmOptions.checkoutFolder, { recursive: true });
  }
  if (fs.existsSync(npmOptions.gitFolder)) {
    rimraf.sync(npmOptions.gitFolder);
  }
  const cloneResult = spawnSync(
    'git',
    ['clone', 'https://github.com/wingsuit-designsystem/wingsuit', tmpCheckoutFolder],
    cmdOptions
  );
  if (cloneResult.status !== 0) {
    const exitCode = typeof cloneResult.status === 'number' ? cloneResult.status : 1;
    logger.error('Failed to clone Wingsuit repository.');
    process.exit(exitCode);
  }
  setupWingsuit();
};
