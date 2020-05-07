/**
 * Wingsuit webpack config.
 */
const wingsuit = require('@wingsuit-designsystem/core');

const pack = wingsuit.getAppPack('production', module);
console.log(pack);
module.exports = pack;
