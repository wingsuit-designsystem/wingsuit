const wingsuiteCore = require('@wingsuit-designsystem/core');

module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    '@storybook/addon-knobs',
  ],
  webpackFinal: (config) => {
    return wingsuiteCore.getAppPack(wingsuiteCore.resolveConfig("storybook", "development"), [config]);
  },
};
