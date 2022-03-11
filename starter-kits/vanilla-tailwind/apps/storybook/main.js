const postCss = require('postcss');

module.exports = {
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-themes',
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
