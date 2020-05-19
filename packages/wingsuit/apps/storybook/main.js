const wingsuitCore = require('@wingsuit-designsystem/core');

module.exports = {
  stories: ['./_patterns/**/*.stories.js'],
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
