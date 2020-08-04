const wingsuitCore = require('@wingsuit-designsystem/core');

module.exports = {
  addons: ['@storybook/addon-docs', '@storybook/addon-viewport', '@storybook/addon-knobs'],
  webpackFinal: (config) => {
    const final = wingsuitCore.getAppPack(wingsuitCore.resolveConfig('storybook'), [config]);
    console.log(final.module.rules);
    return final;
  },
};
