const path = require('path');
const { getDefaultPreset } = require('@wingsuit-designsystem/core');

module.exports = {
  apps: {
    drupal: {
      path: './',
      cssMode: 'extract',
      distFolder: 'dist',
      twigDistFolder: 'templates',
      type: 'drupal',
      assets: [
        {
          folder: false,
          glob: '**/*.pcss.css',
          replace: '.pcss',
        },
        {
          folder: 'internal/',
          glob: '**/images/*.{svg,gif,webp,jpg,jpeg}',
          replace: '',
        },
        {
          folder: 'behaviors/',
          glob: '**/*.behavior.js',
          replace: '.behavior.js',
        },
        {
          folder: 'internal/',
          glob: '**/*.wingsuit.yml',
          replace: '',
        },
      ],
      assetsDistFolder: '',
      designSystem: 'default',
      presets: [
        getDefaultPreset('assets'),
        getDefaultPreset('assetsVideos'),
        getDefaultPreset('babel'),
        getDefaultPreset('css'),
        getDefaultPreset('cms'),
      ],
    },
  },
  parameters: {
    placeholder: {
      service: 'placebeard',
    },
  },
  webpack: (appConfig) => {
    if (appConfig.type === 'drupal') {
      return {
        externals: {
          '@drupal/once': 'once',
        },
      };
    }
    return {};
  },
  presets: [
    '@wingsuit-designsystem/preset-lint',
    '@wingsuit-designsystem/preset-placeholder',
    '@wingsuit-designsystem/preset-imagemin',
  ],
  designSystems: {
    default: {
      path: './',
      namespaces: {
        tokens: path.resolve(__dirname, 'tokens'),
        components: path.resolve(__dirname, 'components'),
      },
    },
  },
};
