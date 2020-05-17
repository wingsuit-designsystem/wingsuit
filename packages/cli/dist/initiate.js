"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _chalk = _interopRequireDefault(require("chalk"));

var _has_yarn = require("./has_yarn");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logger = console;

const {
  spawn,
  spawnSync
} = require('child_process');

const clone = require('git-clone');

function _default(options) {
  const welcomeMessage = 'ws init - the simplest way to install Wingsuit.';
  logger.log(_chalk.default.inverse(`\n ${welcomeMessage} \n`));
  const useYarn = Boolean(options.useNpm !== true) && (0, _has_yarn.hasYarn)();
  const folder = !options.folder ? _path.default.resolve("wingsuit") : _path.default.resolve(options.folder);
  const npmOptions = {
    useYarn,
    checkoutFolder: _path.default.join(folder, '../'),
    targetFolder: folder,
    skipInstall: options.skipInstall
  };
  const cmdOptions = {
    stdio: 'inherit',
    cwd: npmOptions.checkoutFolder
  };
  spawnSync('pwd', [], cmdOptions); // Removes the \n from the stringified buffer

  const extractHash = buffer => {
    const arr = buffer.toString('utf8').split('\n');
    return arr[0];
  };
  /*
   * Function fetches the tags off the repository and then pulls
   * the latest tag, rather than the current HEAD of master.
   */


  const checkoutLatestTag = () => {
    logger.log('Checking out latest tag...'); // Make sure to fetch the tags to pull the latest

    spawnSync('git', ['fetch', '--tags'], cmdOptions); // Pull the latest tag from the repository

    const pullTag = spawnSync('git', ['rev-list', '--tags', '--max-count=1'], {
      cwd: folder
    });
    const tagHash = extractHash(pullTag.output[1]); // Checkout the local repo to the latest tag

    spawnSync('git', ['checkout', tagHash], {
      cwd: folder
    });
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