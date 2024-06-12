import { AppConfig, getDefaultPreset, Config } from '@wingsuit-designsystem/core';

export function name(appConfig: AppConfig) {
  return 'drupal';
}

export function wingsuitConfig(): Config {
  return {
    apps: {
      drupal: {
        path: './apps/drupal',
        cssMode: 'extract',
        distFolder: 'dist/app-drupal',
        twigDistFolder: 'templates',
        type: 'drupal',
        assets: [
          {
            folder: '',
            glob: '**/*.css',
            replace: '.css',
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
          {
            folder: 'internal/',
            glob: '**/*.twig',
            replace: '',
          },
          {
            folder: 'vendors/',
            glob: '**/*.vendor.js',
            replace: '.vendor.js',
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
          '@wingsuit-designsystem/preset-pattern',
        ],
      },
    },
  };
}
