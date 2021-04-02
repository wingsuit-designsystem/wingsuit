/**
 * Wingsuit webpack config.
 */
const wingsuitCore = require('@wingsuit-designsystem/core');

const appConfig = wingsuitCore.resolveConfig('drupal', process.env.NODE_ENV);
const finalConfig = wingsuitCore.getAppPack(appConfig);
console.log(finalConfig.module.rules);
module.exports = finalConfig;
