const { DefinePlugin } = require('webpack');

const wingsuitCore = require('@wingsuit-designsystem/core');
const postCss = require('postcss');

module.exports = {
  typescript: { reactDocgen: false },
  core: {
    builder: 'webpack5',
  },
  stories: ['../../source/**/*.stories.@(js|jsx)'],
  addons: [
    '@storybook/addon-docs',
    // '@storybook/addon-controls',
    // '@storybook/addon-viewport',
    // '@storybook/addon-links',
    // 'storybook-addon-themes',
    // '@storybook/addon-measure',
    // {
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: postCss,
    //     },
    //   },
    // },
  ],
  webpackFinal: (config) => {
    const storybookDefinePlugin = config.plugins.find((plugin) => plugin.definitions);

    config.plugins = config.plugins.map((plugin) => {
      if (plugin.definitions != null) {
        console.log('SADJAKLSDJHLWQHOQEUWOQDJKLAJDLSAJDKLSAJDLKASJDLAD');
        plugin.definitions.process = JSON.stringify('{}');
      }
      return plugin;
    });

    const final = wingsuitCore.getAppPack(wingsuitCore.resolveConfig('storybook'), [config]);
    return final;
  },
};
