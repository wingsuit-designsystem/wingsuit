import { getAppNames, resolveConfig } from '@wingsuit-designsystem/core';
import { Command } from 'commander';
import version from './cli-version';

const inquirer = require('inquirer');

const { spawn } = require('child_process');

const logger = console;

export default function (options: Command, environment) {
  const getAppName = async () => {
    if (options.args.length > 0) {
      return Promise.resolve(options.args[0]);
    }
    const result = await inquirer.prompt([
      {
        type: 'list',
        message: 'Choose your app',
        choices: getAppNames(),
        name: `appName`,
      },
    ]);
    return result.appName;
  };
  const startApp = async () => {
    const appName = await getAppName();
    const parsedArgs = options.parseOptions(options.args);
    const { outputDir, docs } = options;
    const additionalArgs = ` ${parsedArgs.unknown.join(' ')}`;
    try {
      const appConfig = resolveConfig(appName, environment);
      const consoleCommand =
        (docs !== true
          ? appConfig.startup() + additionalArgs
          : `export STORYBOOK_DOCS=true && ${appConfig.startup()} --docs`) +
        (outputDir && outputDir !== '' ? ` --output-dir ${outputDir}` : '') +
        additionalArgs;
      version({});
      logger.info('');
      logger.info(`Starting Wingsuit app "${appName}"...`);
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
}
