const wingsuitCore = require('@wingsuit-designsystem/core');

module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    '@storybook/addon-knobs',
  ],
  webpackFinal: (config) => {
    return wingsuitCore.getAppPack(wingsuitCore.resolveConfig('storybook'), [
      config,
    ]);
  },
};
