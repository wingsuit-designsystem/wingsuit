/**
 * Wingsuit webpack config.
 */
const wingsuit = require('@wingsuit-designsystem/core');
const pack = wingsuit.getAppPack(process.env.NODE_ENV, module, []);
module.exports = pack;
