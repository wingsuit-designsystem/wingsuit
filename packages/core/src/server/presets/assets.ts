import * as path from 'path';
import fs from 'fs';

import AppConfig from '../../AppConfig';

const CopyPlugin = require('copy-webpack-plugin');

export function name(appConfig: AppConfig) {
  return 'assets';
}

export function webpack(appConfig: AppConfig) {
  const entryPointPath = path.resolve(appConfig.path, 'assets.js');
  // Storybook needs entries as array. For other apps assets keys are prefered.
  const entryPoints =
    appConfig.type === 'storybook'
      ? [entryPointPath]
      : {
          assets: entryPointPath,
        };
  const pack: any = {
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: 'images/*',
            to: appConfig.assetsDistFolder,
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /.*[/|\\\\]fonts[/|\\\\].*\.(svg|woff|woff2|eot|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: path.join(appConfig.assetsDistFolder, 'font'),
                name: '[name].[ext]?[hash]',
              },
            },
          ],
        },
        {
          loader: 'file-loader',
          test: /.*[/|\\\\]images[/|\\\\].*\.svg$/,
          options: {
            outputPath: path.join(appConfig.assetsDistFolder, 'images'),
            name: '[name].[ext]',
          },
        },
        {
          loader: 'file-loader',
          test: /\.(png|jpg|gif|webp)$/,
          options: {
            outputPath: path.join(appConfig.assetsDistFolder, 'images'),
            name: '[name].[ext]',
          },
        },
      ],
    },
  };
  if (fs.existsSync(entryPointPath)) {
    pack.entry = entryPoints;
  }
  return pack;
}
