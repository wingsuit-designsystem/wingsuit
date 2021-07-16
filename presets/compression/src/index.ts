import { AppConfig } from '@wingsuit-designsystem/core';

// node modules
const zlib = require('zlib');
const zopfli = require('@gfx/zopfli');

// webpack plugins
const CompressionPlugin = require('compression-webpack-plugin');

/**
 * Exposing options, which can be changed in the wingsuit.config.js.
 */
interface CompressionConfig {
  gzipEnabled: boolean;
  brotliEnabled: boolean;
  fileName: string;
}

/**
 * Give the preset a name, so we can access it in the wingsuit.config.js.
 * @param {AppConfig} appConfig
 * @returns {string}
 */
export function name(appConfig: AppConfig) {
  return 'compression';
}

/**
 * Setting default values.
 * @param {AppConfig} appConfig
 * @returns {CompressionConfig}
 */
export function defaultConfig(appConfig: AppConfig): CompressionConfig {
  return {
    gzipEnabled: true,
    brotliEnabled: true,
    fileName: '[path][base]',
  };
}

export function webpack(appConfig: AppConfig, config: CompressionConfig) {
  if (appConfig.environment === 'production') {
    return {
      // Allow falsy values in plugins array see https://github.com/webpack/webpack/issues/5493#issuecomment-321705298
      plugins: [
        config.gzipEnabled && (
          new CompressionPlugin({
            algorithm(input, compressionOptions, callback) {
              return zopfli.gzip(input, compressionOptions, callback);
            },
            compressionOptions: {
              numiterations: 15,
              level: 9,
            },
            deleteOriginalAssets: false,
            filename: `${config.fileName}.gz`,
            minRatio: 0.8,
            test: /\.(js|css|html)$/,
          })
        ),
        config.brotliEnabled && (
          new CompressionPlugin({
            algorithm: 'brotliCompress',
            compressionOptions: {
              params: {
                [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY,
              },
            },
            deleteOriginalAssets: false,
            filename: `${config.fileName}.br`,
            minRatio: 0.8,
            test: /\.(js|css|html)$/,
          })
        ),
      ].filter(Boolean),
    };
  }
  return {};
}
