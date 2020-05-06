import * as path from 'path';
import {BaseConfigBundle} from "../BaseConfigBundle";
import BaseApp from "../BaseApp";

const CopyPlugin = require('copy-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');


export default class AssetBundle extends BaseConfigBundle {
  public static create(app: BaseApp) {
    return new AssetBundle('svg', app);
  }

  protected productionWebpackConfig: {} = {
    plugins: [],
  }

  protected sharedWebpackConfig = {
    output: {
      publicPath: '/assets'
    },
    entry: [
      path.resolve(this.appConfig.path, 'assets.js')
    ],
    plugins: [
      new SpriteLoaderPlugin(),
      new CopyPlugin([
        {
          from: 'image/images/*',
          to: 'images',
        }
      ]),
    ],
    module: {
      rules: [
        {
          loader: 'file-loader',
          test: /\.(png|jpg|gif)$/,
          options: {
            name: 'images/[name].[ext]',
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]?[hash]',
              },
            },
          ],
        },
        {
          test: /.*\.svg$/,
          use: [
            {
              loader: 'svg-sprite-loader', options: {
                extract: true,
                spriteFilename: 'images/spritemap.svg',
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
                  {convertPathData: false}
                ]
              }
            }
          ]
        }
      ]
    },
  }

  alterFinalConfig(config: any): {} {
    config.module.rules = config.module.rules.map(data => {
      if (/svg\|/.test(String(data.test)))
        data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
      return data;
    });
    return config;
  }
}
