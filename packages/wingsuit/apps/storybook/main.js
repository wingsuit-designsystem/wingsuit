module.exports = {
  webpackFinal: (config) => {
    const wingsuit = require('@wingsuit-designsystem/core');
    return wingsuit.getAppPack('development', module, [config]);
  },
}
