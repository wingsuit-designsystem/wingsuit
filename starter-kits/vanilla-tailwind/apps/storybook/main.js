const postCss = require('postcss');

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
    './patterns/**/*.mdx',
    '../../source/**/*.stories.jsx',
    '../../source/**/*.stories.wingsuit.jsx',
    './patterns/**/*.stories.wingsuit.jsx',
    './patterns/**/*.stories.jsx',
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
