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
