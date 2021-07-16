import * as path from 'path';
import { AppConfig } from '@wingsuit-designsystem/core';

// webpack plugins
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

interface ImageminConfig {
  webpEnabled: boolean;
}

export function name(appConfig: AppConfig) {
  return 'imagemin';
}

export function defaultConfig(appConfig: AppConfig): ImageminConfig {
  return {
    webpEnabled: true,
  };
}

export function webpack(appConfig: AppConfig, config: ImageminConfig) {
  return {
    plugins: [
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== 'production',
        test: path.join(appConfig.assetBundleFolder, 'images/**'),
        exclude: path.join(appConfig.assetBundleFolder, 'images/spritemap.svg'),
        cacheFolder: path.join(appConfig.absRootPath, '.cache'),
        plugins: [
          // eslint-disable-next-line global-require
          require('imagemin-gifsicle')({
            interlaced: true,
          }),
          // eslint-disable-next-line global-require
          require('imagemin-mozjpeg')({
            progressive: true,
            arithmetic: false,
          }),
          // eslint-disable-next-line global-require
          require('imagemin-optipng')({
            optimizationLevel: 5,
          }),
          // eslint-disable-next-line global-require
          require('imagemin-svgo')({
            plugins: [{ convertPathData: false }],
          }),
        ],
      }),
      config.webpEnabled && (
        new ImageminWebpWebpackPlugin({
          config: [
            {
              test: /\.(jpe?g|png)/,
            },
          ],
          silent: false,
          detailedLogs: true,
        })
      )
    ].filter(Boolean),
  };
}
