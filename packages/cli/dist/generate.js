"use strict";

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.array.iterator");

var _commander = _interopRequireDefault(require("commander"));

var _leven = _interopRequireDefault(require("leven"));

var _initiate = _interopRequireDefault(require("./initiate"));

var _component = _interopRequireDefault(require("./component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logger = console;

_commander.default.command('init').description('Install Wingsuit.').option('-f --folder <folder>', 'The target folder').option('-s --skip-install', 'Skip installing deps').option('-N --use-npm', 'Use npm to install deps').action(options => (0, _initiate.default)(options));

_commander.default.command('generate').description('Install Wingsuit.').option('-f --folder <folder>', 'The target folder').option('-N --use-npm', 'Use npm to install deps').action(options => (0, _component.default)(options));

_commander.default.command('*', "").action(() => {
  const [,, invalidCmd] = process.argv;
  logger.error(' Invalid command: %s.\n See --help for a list of available commands.', invalidCmd); // eslint-disable-next-line

  const availableCommands = _commander.default.commands.map(cmd => cmd._name);

  const suggestion = availableCommands.find(cmd => (0, _leven.default)(cmd, invalidCmd) < 3);

  if (suggestion) {
    logger.log(`\n Did you mean ${suggestion}?`);
  }

  process.exit(1);
});

_commander.default.usage('<command> [options]').version("1").parse(process.argv);

if (_commander.default.rawArgs.length < 3) {
  _commander.default.help();
}