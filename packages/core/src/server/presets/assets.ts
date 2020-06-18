import * as path from 'path';
import AppConfig from "../../AppConfig";

const CopyPlugin = require('copy-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

export function webpack(appConfig: AppConfig) {
  return {
    entry: {
      assets: path.resolve(appConfig.path, 'assets.js'),
    },
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
          loader: 'file-loader',
          test: /\.(png|jpg|gif)$/,
          options: {
            outputPath: path.join(appConfig.assetBundleFolder, 'images'),
            name: '[name].[ext]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
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
          test: /.*\.svg$/,
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                extract: true,
                spriteFilename: path.join(appConfig.assetBundleFolder, 'images/spritemap.svg'),
              },
            },
            'svg-transform-loader',
            {
              loader: 'svgo-loader',
              options: {
                plugins: [
                  {convertFillsToCurrentColor: true},
                  {removeTitle: true},
                  {removeEditorsNSData: false},
                  {convertColors: {shorthex: false}},
                  {convertPathData: false},
                ],
              },
            },
          ],
        },
      ],
    },
  }
}

export function webpackFinal(appConfig: AppConfig, config: any): {} {
  if (appConfig.type === 'storybook') {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((data) => {
      if (/svg\|ico\|jpg\|/.test(String(data.test)))
        // eslint-disable-next-line no-param-reassign
        data = {};
      return data;
    });
  }
  return config;
}