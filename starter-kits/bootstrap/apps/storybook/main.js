const wingsuitCore = require('@wingsuit-designsystem/core');

module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    '@storybook/addon-controls',
    '@storybook/addon-links',
    '@storybook/addon-backgrounds',
    '@storybook/addon-postcss',
  ],
  webpackFinal: (config) => {
    const final = wingsuitCore.getAppPack(wingsuitCore.resolveConfig('storybook'), [config]);
    return final;
  },
};
