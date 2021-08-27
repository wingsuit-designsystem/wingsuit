/**
 * Wingsuit webpack config.
 */
const wingsuitCore = require('@wingsuit-designsystem/core');

const appConfig = wingsuitCore.resolveConfig('pages', process.env.NODE_ENV);
const finalConfig = wingsuitCore.getAppPack(appConfig);
module.exports = finalConfig;
