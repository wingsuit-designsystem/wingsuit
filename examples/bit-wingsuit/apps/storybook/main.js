const wingsuitCore = require('@wingsuit-designsystem/core');

module.exports = {
  addons: ['@storybook/addon-docs', '@storybook/addon-viewport', '@storybook/addon-controls'],
  webpackFinal: (config) => {
    return wingsuitCore.getAppPack(wingsuitCore.resolveConfig('storybook'), [config]);
  },
};
