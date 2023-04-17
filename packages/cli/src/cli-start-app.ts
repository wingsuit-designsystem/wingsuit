import { getAppNames, resolveConfig } from '@wingsuit-designsystem/core';
import { Command } from 'commander';
import chalk from 'chalk';
import version from './cli-version';

const inquirer = require('inquirer');

const { spawn } = require('child_process');

const logger = console;

export default (options: Command, environment) => {
  const getAppName = async () => {
    if (options.args.length > 0) {
      return Promise.resolve(options.args[0]);
    }
    const result = await inquirer.prompt([
      {
        type: 'list',
        message: 'Choose your app',
        choices: getAppNames(),
        name: 'appName',
      },
    ]);
    return result.appName;
  };
  const startApp = async () => {
    const appName = await getAppName();
    const parsedArgs = options.parseOptions(options.args);
    const { docs } = options;
    const passedArgs = ` ${parsedArgs.unknown.join(' ')}`;
    try {
      const appConfig = resolveConfig(appName, environment);
      const consoleCommand =
        docs !== true
          ? appConfig.startup(passedArgs)
          : `export STORYBOOK_DOCS=true && ${appConfig.startup(passedArgs)}`;

      logger.info('');
      logger.info(chalk.green(` Starting Wingsuit app "${appName}"...`));
      version({});
      logger.info(' ');
      logger.info(chalk.gray(` Command: ${consoleCommand}`));
      logger.info('');
      const command = spawn(consoleCommand, [], { shell: true, stdio: 'inherit' });
      command.on('close', (code) => {
        logger.log(`${code}`);
      });
    } catch (e) {
      logger.error(e);
    }
  };
  startApp();
};
