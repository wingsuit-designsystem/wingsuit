const wingsuitCore = require('@wingsuit-designsystem/core');

module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-links',
    'storybook-addon-themes',
  ],
  webpackFinal: (config) => {
    const final = wingsuitCore.getAppPack(wingsuitCore.resolveConfig('storybook'), [config]);
    return final;
  },
};
