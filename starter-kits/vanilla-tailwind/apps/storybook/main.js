const wingsuitCore = require('@wingsuit-designsystem/core');
const postCss = require('postcss');

module.exports = {
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-themes',
    '@storybook/addon-postcss',
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
