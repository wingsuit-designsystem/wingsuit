const postCss = require('postcss');

export default {
  framework: {
    name: '@wingsuit-designsystem/storybook',
    options: {
      appName: 'storybook',
      builder: {
        fsCache: true,
      },
    },
  },
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
  ],
};
