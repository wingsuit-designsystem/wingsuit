import program from 'commander';
import leven from 'leven';

import startApp from './startApps';
import initiate from './initiate';
import component from './component';
import upgrade from './upgrade';
import app from './app';
import version from './version';

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
  .action((options) => initiate(options));

program
  .command('version')
  .description('Shows Wingsuit version.')
  .action((options) => version(options));

program
  .command('generate-component')
  .description('Generate Wingsuit component.')
  .option('-N --use-npm', 'Use npm to install deps')
  .action((options) => component(options));

program
  .command('generate-app')
  .description('Generate Wingsuit app.')
  .option('-N --use-npm', 'Use npm to install deps')
  .action((options) => app(options));

program
  .command('upgrade')
  .description('Upgrade Wingsuit to Version 2.')
  .action((options) => upgrade(options));

program
  .command('dev')
  .option('-D --docs', 'Build a documentation-only site using addon-docs')
  .description('Start Wingsuit App in dev mode.')
  .action((options) => startApp(options, 'development'));
program
  .command('build')
  .option('-D --docs', 'Build a documentation-only site using addon-docs')
  .option('-o --output-dir <path>', 'Directory where to store built files')
  .description('Build Wingsuit App.')
  .action((options) => startApp(options, 'production'));

program.command('*', '').action(() => {
  const [, , invalidCmd] = process.argv;
  logger.error(' Invalid command: %s.\n See --help for a list of available commands.', invalidCmd);
  // eslint-disable-next-line
    const availableCommands = program.commands.map(cmd => cmd._name);
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
