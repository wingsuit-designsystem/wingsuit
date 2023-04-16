import { AppConfig } from '@wingsuit-designsystem/core';

const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

// webpack plugins

interface ImageminQuality {
  webp: number;
  png: number;
  jpg: number;
}

interface ImageminConfig {
  webpEnabled: boolean;
  quality: ImageminQuality;
}

export function name(appConfig: AppConfig) {
  return 'imagemin';
}

export function defaultConfig(appConfig: AppConfig): ImageminConfig {
  return {
    webpEnabled: true,
    quality: {
      png: 90,
      jpg: 90,
      webp: 90,
    },
  };
}

export function webpack(appConfig: AppConfig, config: ImageminConfig) {
  const generators = [
    {
      preset: 'webp',
      filename: () => '[name][ext]',
      implementation: ImageMinimizerPlugin.sharpGenerate,
      options: {
        encodeOptions: {
          webp: {
            quality: config.quality.webp,
          },
        },
      },
    },
    {
      preset: 'webp_scale_crop',
      filename: () => '[name]-[width]-[height][ext]',
      implementation: ImageMinimizerPlugin.sharpGenerate,
      options: {
        encodeOptions: {
          webp: {
            quality: config.quality.webp,
          },
        },
      },
    },
    {
      preset: 'webp_scale',
      filename: () => '[name]-[width][ext]',
      implementation: ImageMinimizerPlugin.sharpGenerate,
      options: {
        encodeOptions: {
          webp: {
            quality: config.quality.webp,
          },
        },
      },
    },
  ];

  return {
    optimization: {
      nodeEnv: 'production',
      mergeDuplicateChunks: false,
      minimizer: [
        new ImageMinimizerPlugin({
          test: /\.(jpe?g|png|gif|webp)$/i,
          generator: generators,
          severityError: 'off',
          loader: false,
          minimizer: {
            implementation: ImageMinimizerPlugin.sharpMinify,
            options: {
              encodeOptions: {
                png: {
                  quality: config.quality.png,
                },
                mozjpeg: {
                  quality: config.quality.jpg,
                },
                webp: {
                  quality: config.quality.webp,
                },
              },
            },
          },
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|webp)$/i,
          use: [
            {
              loader: ImageMinimizerPlugin.loader,
              options: {
                generator: generators,
              },
            },
          ],
        },
      ],
    },
  };
}
