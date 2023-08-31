import { resolveConfig, stories } from '@wingsuit-designsystem/core';

const appName = 'storybook';
const appConfig = resolveConfig(appName);
const postCss = require('postcss');

export default {
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        /** This don't work */
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
    './patterns/**/*.mdx',
    '../../source/default/patterns/**/*.stories.wingsuit.jsx',
    '../../source/default/patterns/**/*.stories.jsx',
    './patterns/**/*.stories.wingsuit.jsx',
    './patterns/**/*.stories.jsx',
    ...stories(appConfig, ['icon', 'placeholder']),
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: postCss,
        },
      },
    },
    'storybook-addon-theme-provider',
    {
      name: '@wingsuit-designsystem/storybook',
      options: {
        appName: appName,
      },
    },
  ],
};
