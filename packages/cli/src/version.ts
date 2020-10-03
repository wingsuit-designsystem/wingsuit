const logger = console;
const pkg = require('../package.json');

export default function (options) {
  logger.log(`Wingsuit Version: ${pkg.version}`);
}
