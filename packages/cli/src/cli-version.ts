import chalk from 'chalk';

const logger = console;
const pkg = require('../package.json');

export default function (options) {
  logger.log(chalk.gray(` Version: ${pkg.version}`));
}
export function getVersion(){
  return pkg.version;
}
