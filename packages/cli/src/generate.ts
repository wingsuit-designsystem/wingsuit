import program from 'commander';
import leven from 'leven';
import initiate from './initiate';
import component from './component';
import version from './version';

const logger = console;
program
  .command('init')
  .description('Install Wingsuit.')
  .option('-f --folder <folder>', 'The target folder')
  .option('-s --skip-install', 'Skip installing deps')
  .option(
    '-k --starter-kit',
    'Select your starter kit. Available starter kits are tailwind, bootstrap. Default is tailwind'
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
