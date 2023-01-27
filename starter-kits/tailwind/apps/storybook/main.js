const postCss = require('postcss');

// const { storyIndexers } = require('./csf-loader');

module.exports = {
  framework: '@storybook/react-webpack5',
  typescript: { reactDocgen: false },
  core: {
    builder: 'webpack5',
  },
  stories: ['../../source/**/*.stories.wingsuit.jsx', '../../source/**/*.stories.jsx'],
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
    {
      name: '@wingsuit-designsystem/storybook',
      options: {
        appName: 'storybook',
      },
    },
  ],
};
