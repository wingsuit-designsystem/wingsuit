import program from 'commander';
import leven from 'leven';

import startApp from './cli-start-app';
import cliInit from './cli-init';
import generateComponent from './cli-create-component';
import upgrade from './cli-upgrade';
import generateApp from './cli-generate-app';
import cliVersion from './cli-version';

const logger = console;

program
  .command('init')
  .description('Install Wingsuit.')
  .option('-f --folder <folder>', 'The target folder')
  .option('-s --skip-install', 'Skip installing deps')
  .option(
    '-k --starter-kit <kit>',
    'Select your starter kit. Available starter kits are tailwind, bootstrap. Default is tailwind',
    'tailwind'
  )
  .option('-N --use-npm', 'Use npm to install deps')
  .option('-S --smoke-test', 'Exit after successful start')
  .option('-B --branch <branch>', 'Use a specific branch')
  .action((options) => cliInit(options));

program
  .command('version')
  .description('Shows Wingsuit version.')
  .action((options) => cliVersion(options));

program
  .command('generate-component')
  .description('Generate Wingsuit component.')
  .option('-N --use-npm', 'Use npm to install deps')
  .action((options) => generateComponent(options));

program
  .command('generate-app')
  .description('Generate Wingsuit app.')
  .option('-N --use-npm', 'Use npm to install deps')
  .action((options) => generateApp(options));

program
  .command('upgrade')
  .option('-A --appName', 'The wingsuit appName to upgrade. Default is storybook.')
  .description('Upgrade Wingsuit to Version 2.')
  .action((options) => upgrade(options));

program
  .command('dev')
  .option('-D --docs', 'Build a documentation-only site using addon-docs')
  .allowUnknownOption(true)
  .description('Start Wingsuit App in dev mode.')
  .action((options) => startApp(options, 'development'));
program
  .command('build')
  .option('-D --docs', 'Build a documentation-only site using addon-docs')
  .allowUnknownOption(true)
  .description('Build Wingsuit App.')
  .action((options) => startApp(options, 'production'));

program.command('*', '').action(() => {
  const [, , invalidCmd] = process.argv;
  logger.error(' Invalid command: %s.\n See --help for a list of available commands.', invalidCmd);
  // eslint-disable-next-line no-underscore-dangle
  const availableCommands = program.commands.map((cmd) => cmd._name);
  const suggestion = availableCommands.find((cmd) => leven(cmd, invalidCmd) < 3);
  if (suggestion) {
    logger.log(`\n Did you mean ${suggestion}?`);
  }

  process.exit(1);
});

program.usage('<command> [options]').version('1').parse(process.argv);

if (program.rawArgs.length < 3) {
  program.help();
}
