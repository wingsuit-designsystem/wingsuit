/**
 * Wingsuit webpack config.
 */
const wingsuitCore = require('@wingsuit-designsystem/core');
const appConfig = wingsuitCore.resolveConfig('drupal')
const pack = wingsuitCore.getAppPack(appConfig);
module.exports = pack;
