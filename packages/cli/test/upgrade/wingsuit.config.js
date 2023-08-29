const namespaces = require('./source/default/namespaces');

module.exports = {
  presets: [
    '@wingsuit-designsystem/preset-tailwind',
    '@wingsuit-designsystem/preset-lint',
    '@wingsuit-designsystem/preset-twing',
    '@wingsuit-designsystem/preset-placeholder',
    '@wingsuit-designsystem/preset-storybook',
    '@wingsuit-designsystem/preset-drupal',
    '@wingsuit-designsystem/preset-icon',
    '@wingsuit-designsystem/preset-icon-spritemap',
    '@wingsuit-designsystem/preset-imagemin',
  ],
  designSystems: {
    default: {
      namespaces,
    },
  },
};
