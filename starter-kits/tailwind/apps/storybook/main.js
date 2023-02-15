const postCss = require('postcss');

// const { storyIndexers } = require('./csf-loader');

export default {
  framework: '@storybook/react-webpack5',
  typescript: { reactDocgen: false },
  docs: {
    autodocs: true,
  },
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../../source/**/*.stories.wingsuit.jsx',
    '../../source/**/*.stories.jsx',
    './patterns/**/*.stories.jsx',
    // './patterns/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
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
