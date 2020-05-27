/**
 * Wingsuit webpack config.
 */
const wingsuitCore = require('@wingsuit-designsystem/core');

const appConfig = wingsuitCore.resolveConfig('drupal', process.env.NODE_ENV);
module.exports = wingsuitCore.getAppPack(appConfig);
