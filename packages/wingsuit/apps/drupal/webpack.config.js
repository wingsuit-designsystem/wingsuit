/**
 * Wingsuit webpack config.
 */
const wingsuit = require('@wingsuit-designsystem/core');
console.log(process.env.NODE_ENV);
const pack = wingsuit.getAppPack(process.env.NODE_ENV, module);
module.exports = pack;
console.log(pack);
