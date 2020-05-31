import * as path from 'path';
import { BaseWebpackBundle } from '../BaseWebpackBundle';

const CopyPlugin = require('copy-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

export default class StorybookAssetBundle extends BaseWebpackBundle {
  protected productionWebpackConfig: {} = {
    plugins: [],
  };

  protected sharedWebpackConfig = {
    entry: [path.resolve(this.appConfig.path, 'assets.js')],
    plugins: [
      new SpriteLoaderPlugin(),
      new CopyPlugin([
        {
          from: 'images/*',
          to: this.appConfig.assetBundleFolder,
        },
      ]),
    ],
    module: {
      rules: [
        {
          test: /\.(woff|woff2|eot|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: `${this.appConfig.assetBundleFolder}/fonts/[name].[ext]?[hash]`,
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
                spriteFilename: `images/spritemap.svg`,
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
      ],
    },
  };

  alterFinalConfig(config: any): {} {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((data) => {
      if (/svg\|/.test(String(data.test)))
        // eslint-disable-next-line no-param-reassign
        data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|cur|ani)(\?.*)?$/;
      return data;
    });
    return config;
  }
}
