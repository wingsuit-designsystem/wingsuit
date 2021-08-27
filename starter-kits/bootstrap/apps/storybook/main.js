const wingsuitCore = require('@wingsuit-designsystem/core');
const postCss = require('postcss');

module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    '@storybook/addon-controls',
    '@storybook/addon-links',
    '@storybook/addon-backgrounds',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: postCss,
        },
      },
    },
  ],
  webpackFinal: (config) => {
    const final = wingsuitCore.getAppPack(wingsuitCore.resolveConfig('storybook'), [config]);
    return final;
  },
};
