import { getAppNames, resolveConfig } from '@wingsuit-designsystem/core';

const inquirer = require('inquirer');

const { spawn } = require('child_process');

const logger = console;

export default function(options, environment) {
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
    try {
      const appConfig = resolveConfig(appName, environment);
      const console = appConfig.startup();
      logger.info('');
      logger.info(`Starting Wingsuit app "${appName}"...`);
      logger.info('');
      const command = spawn(console, [], { shell: true, stdio: 'inherit' });
      command.on('close', code => {
        logger.log(`${code}`);
      });
    } catch (e) {
      logger.error(e);
    }
  };
  startApp();
}
