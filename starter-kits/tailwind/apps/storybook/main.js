const postCss = require('postcss');

export default {
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        lazyCompilation: false,
        fsCache: false,
      },
    },
  },
  typescript: { reactDocgen: false },
  docs: {
    autodocs: 'tag',
    defaultName: 'Docs',
  },
  stories: [
    './patterns/00-foundations/**/*.mdx',
    '../../source/default/patterns/**/*.stories.wingsuit.jsx',
    '../../source/default/patterns/**/*.stories.jsx',
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
