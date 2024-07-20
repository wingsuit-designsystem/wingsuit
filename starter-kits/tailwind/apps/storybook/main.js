export default {
  framework: {
    name: '@wingsuit-designsystem/storybook',
    options: {
      appName: 'storybook',
      builder: {
        useSWC: true,
      },
    },
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-styling-webpack',
    },
  ],
};
