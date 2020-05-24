const logger = console;
import chalk from 'chalk';

const {spawn, spawnSync} = require('child_process');
const clone = require('git-clone');
import {hasYarn} from './has_yarn';
import path from 'path';

export default function (options) {

  const welcomeMessage = 'ws init - the simplest way to install Wingsuit.';
  logger.log(chalk.inverse(`\n ${welcomeMessage} \n`));
  const useYarn = Boolean(options.useNpm !== true) && hasYarn();
  const folder = !options.folder ? path.resolve("wingsuit") : path.resolve(options.folder)
  const npmOptions = {
    useYarn,
    checkoutFolder: path.join(folder, '../'),
    gitFolder: path.resolve(folder),
    targetFolder: folder,
    skipInstall: options.skipInstall,
  };
  const cmdOptions = {stdio: 'inherit', cwd: npmOptions.checkoutFolder};
  const gitOptions = {stdio: 'inherit', cwd: npmOptions.gitFolder};

  spawnSync('pwd', [], cmdOptions);

  // Removes the \n from the stringified buffer
  const extractHash = buffer => {
    const arr = buffer.toString('utf8').split('\n');
    return arr[0];
  };

  /*
   * Function fetches the tags off the repository and then pulls
   * the latest tag, rather than the current HEAD of master.
   */
  const checkoutLatestTag = () => {
    logger.log('Checking out latest tag...');
    // Make sure to fetch the tags to pull the latest
    spawnSync('git', ['fetch', '--tags'], gitOptions);

    // Pull the latest tag from the repository
    const pullTag = spawnSync('git', ['rev-list', '--tags', '--max-count=1'], {
      cwd: folder,
    });
    const tagHash = extractHash(pullTag.output[1]);

    // Checkout the local repo to the latest tag
    spawnSync('git', ['checkout', tagHash], gitOptions);
  };

  /*
   * npm commands must be run synchronously.
   * `npm run setup` utilizes dependencies initialized with `npm install`
   */
  const setupWingsuit = () => {
    // This function must complete before the subsequent installs can be ran.
    checkoutLatestTag();
    spawn('mv', ['wingsuit', 'wingsuit.bak'], cmdOptions);
    spawn('mv', ['wingsuit.bak/packages/wingsuit', 'wingsuit'], cmdOptions);
    spawn('rm', ['-rf', 'wingsuit.bak'], cmdOptions);

    console.log('Running Wingsuit dependency installation...');
    cmdOptions.cwd = npmOptions.targetFolder;
    if (!npmOptions.skipInstall) {
      if (useYarn) {
        spawnSync('yarn', ['install'], cmdOptions);
        logger.log('Running Wingsuit setup...');
        spawnSync('yarn', ['dev:storybook'], cmdOptions);
      } else {
        spawnSync('npm', ['install'], cmdOptions);
        logger.log('Running Wingsuit setup...');
        spawnSync('npm', ['run', 'dev:storybook'], cmdOptions);
      }
    }
  };

  logger.log('Cloning Wingsuit repo...');
  clone('https://github.com/wingsuit-designsystem/wingsuit', folder, cmdOptions, setupWingsuit);

}