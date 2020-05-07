const wingsuitCore = require('@wingsuit-designsystem/core');

module.exports = {
  webpackFinal: config => {
    return wingsuitCore.getAppPack('development', module, [config]);
  },
};
