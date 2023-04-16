export default {
  framework: '@storybook/react-webpack5',
  typescript: { reactDocgen: false },
  docs: {
    autodocs: true,
  },
  core: {
    builder: 'webpack5',
    options: {
      lazyCompilation: true,
      fsCache: true,
    },
  },
  stories: [
    './patterns/**/*.mdx',
    './patterns/**/*.stories.wingsuit.jsx',
    '../../source/**/*.stories.wingsuit.jsx',
    '../../source/**/*.stories.jsx',
    './patterns/**/*.stories.jsx',
  ],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@wingsuit-designsystem/storybook',

      options: {
        appName: 'storybook',
      },
    },
  ],
};
