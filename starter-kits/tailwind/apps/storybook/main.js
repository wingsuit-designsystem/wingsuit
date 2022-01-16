const postCss = require('postcss');

module.exports = {
  typescript: { reactDocgen: false },
  core: {
    builder: 'webpack5',
  },
  stories: ['../../source/**/*.stories.@(js|jsx)', '../../source/**/*.stories.wingsuit.@(js|jsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-links',
    '@storybook/addon-measure',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: postCss,
        },
      },
    },
    '@wingsuit-designsystem/storybook',
  ],
};
