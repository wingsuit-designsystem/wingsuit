import * as path from 'path';

import AppConfig from '../../AppConfig';

const CopyPlugin = require('copy-webpack-plugin');

export function name(appConfig: AppConfig) {
  return 'assets';
}

export function webpack(appConfig: AppConfig) {
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
          type: 'asset/resource',
          generator: {
            filename: `${path.join(appConfig.assetsDistFolder, 'font')}/[name][ext]`,
          },
        },
        {
          test: /\.ya?ml$/,
          exclude: /\.wingsuit\.ya?ml$/,
          use: 'js-yaml-loader',
        },
        {
          test: /.*[/|\\\\]images[/|\\\\].*\.svg$/,
          type: 'asset/resource',
          generator: {
            filename: `${path.join(appConfig.assetsDistFolder, 'images')}/[name][ext]`,
          },
        },
        {
          test: /.*[/|\\\\]icons[/|\\\\].*\.svg$/,
          type: 'asset/resource',
          generator: {
            filename: `${path.join(appConfig.assetsDistFolder, 'images')}/[name][ext]`,
          },
        },
        {
          test: /\.(png|jpg|gif|webp)$/,
          type: 'asset/resource',
          generator: {
            filename: `${path.join(appConfig.assetsDistFolder, 'images')}/[name][ext]`,
          },
        },
      ],
    },
  };

  return pack;
}
