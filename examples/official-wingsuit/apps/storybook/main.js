export default {
  framework: {
    name: '@wingsuit-designsystem/storybook',
    options: {
      appName: 'storybook',
      builder: {
        fsCache: false,
      },
    },
  },
  addons: ['@storybook/addon-essentials'],
};
