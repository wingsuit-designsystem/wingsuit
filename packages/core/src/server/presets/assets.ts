import * as path from 'path';
import AppConfig from '../../AppConfig';

const CopyPlugin = require('copy-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

export function webpack(appConfig: AppConfig) {
  // Storybook needs entries as array. For other apps assets keys are prefered.
  const entryPoints =
    appConfig.type === 'storybook'
      ? [path.resolve(appConfig.path, 'assets.js')]
      : {
          assets: path.resolve(appConfig.path, 'assets.js'),
        };

  return {
    entry: entryPoints,
    plugins: [
      new SpriteLoaderPlugin(),
      new CopyPlugin([
        {
          from: 'images/*',
          to: appConfig.assetBundleFolder,
        },
      ]),
    ],
    module: {
      rules: [
        {
          test: /.*\/fonts\/.*\.(svg|woff|woff2|eot|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: path.join(appConfig.assetBundleFolder, 'font'),
                name: '[name].[ext]?[hash]',
              },
            },
          ],
        },
        {
          test: /.*\/icons\/.*\.svg$/,
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                extract: true,
                outputPath: `${appConfig.assetBundleFolder}/`,
                spriteFilename: 'images/spritemap.svg',
              },
            },
            'svg-transform-loader',
            {
              loader: 'svgo-loader',
              options: {
                plugins: [
                  { convertFillsToCurrentColor: true },
                  { removeTitle: true },
                  { removeEditorsNSData: false },
                  { convertColors: { shorthex: false } },
                  { convertPathData: false },
                ],
              },
            },
          ],
        },

        {
          loader: 'file-loader',
          test: /.*\/images\/.*\.svg$/,
          options: {
            outputPath: path.join(appConfig.assetBundleFolder, 'images'),
            name: '[name].[ext]',
          },
        },
        {
          loader: 'file-loader',
          test: /\.(png|jpg|gif|webp)$/,
          options: {
            outputPath: path.join(appConfig.assetBundleFolder, 'images'),
            name: '[name].[ext]',
          },
        },
      ],
    },
  };
}

export function webpackFinal(appConfig: AppConfig, config: any): {} {
  if (appConfig.type === 'storybook') {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map(data => {
      if (/svg\|ico\|jpg\|/.test(String(data.test)))
        // eslint-disable-next-line no-param-reassign
        data = {};
      return data;
    });
  }
  return config;
}
