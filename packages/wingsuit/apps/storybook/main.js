const wingsuitCore = require('@wingsuit-designsystem/core');

module.exports = {
  addons: ['@storybook/addon-docs'],
  webpackFinal: config => {
    return wingsuitCore.getAppPack('development', module, [config]);
  },
};
