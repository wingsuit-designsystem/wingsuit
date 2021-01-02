import * as path from 'path';
import AppConfig from '../../AppConfig';

const CopyPlugin = require('copy-webpack-plugin');

export function name(appConfig: AppConfig) {
  return 'assets';
}

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
          test: /.*[/|\\\\]fonts[/|\\\\].*\.(svg|woff|woff2|eot|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
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
          loader: 'file-loader',
          test: /.*[/|\\\\]images[/|\\\\].*\.svg$/,
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
