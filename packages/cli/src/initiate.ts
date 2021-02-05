import chalk from 'chalk';
import path from 'path';
import { hasYarn } from './has_yarn';

const logger = console;

const { spawnSync } = require('child_process');
const clone = require('git-clone');
const fs = require('fs');
const mv = require('mv');
const rimraf = require('rimraf');

export default function (options) {
  const welcomeMessage = 'ws init - the simplest way to install Wingsuit.';
  logger.log(chalk.inverse(`\n ${welcomeMessage} \n`));
  const useYarn = Boolean(options.useNpm !== true) && hasYarn();
  const branch = options.branch != null ? options.branch : 'stable';
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

  // Removes the \n from the stringified buffer
  const extractHash = (buffer) => {
    const arr = buffer.toString('utf8').split('\n');
    return arr[0];
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
    const pkg = JSON.parse(fs.readFileSync(pkgFile));
    Object.keys(pkg.devDependencies).forEach((key) => {
      if (key.indexOf('@wingsuit-designsystem/') === 0) {
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
      function (err) {
        rimraf.sync(npmOptions.gitFolder);
        cmdOptions.cwd = npmOptions.targetFolder;
        if (!npmOptions.skipInstall) {
          logger.log('Running Wingsuit dependency installation...');
          if (useYarn) {
            spawnSync('yarn', ['install'], cmdOptions);
            logger.log('Running Wingsuit setup...');
            const startArgs = ['dev:storybook'];
            if (npmOptions.smokeTest) {
              startArgs.push('--smoke-test');
            }
            spawnSync('yarn', startArgs, cmdOptions);
          } else {
            spawnSync('npm', ['install'], cmdOptions);
            logger.log('Running Wingsuit setup...');
            const startArgs = ['run', 'dev:storybook'];
            if (npmOptions.smokeTest) {
              startArgs.push('--smoke-test');
            }
            spawnSync('npm', startArgs, cmdOptions);
          }
        }
      }
    );
  };
  logger.log(`Cloning Wingsuit repo ...`);
  clone(
    'https://github.com/wingsuit-designsystem/wingsuit',
    npmOptions.gitFolder,
    cmdOptions,
    setupWingsuit
  );
}
