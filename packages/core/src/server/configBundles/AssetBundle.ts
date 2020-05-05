import * as path from 'path';
import {BaseConfigBundle} from "../BaseConfigBundle";
import BaseApp from "../BaseApp";

const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');


export default class AssetBundle extends BaseConfigBundle {
  public static create(app: BaseApp) {
    return new AssetBundle('svg', app);
  }

  protected sharedWebpackConfig = {
    output: {
      publicPath: '/assets'
    },
    entry: {
      assets: path.resolve(this.appConfig.path, 'assets.js')
    },
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
          test: /.*\.svg$/,
          use: [
            {
              loader: 'svg-sprite-loader', options: {
                extract: true,
                spriteFilename: 'images/spritemap.svg',
              }
            },
          ]
        }
      ]
    },

    plugins: [
      new SpriteLoaderPlugin(),
      // Sprite system options
      new SVGSpritemapPlugin(path.resolve(this.appConfig.namespaces.atoms, 'svg/svg/**/*.svg'), {
        styles: {
          filename: path.resolve(this.appConfig.namespaces.atoms, 'svg/_icons.generated.css'),
        },
        output: {
          filename: 'images/spritemap.svg',
          svg4everybody: true,
          svgo: true,
        },
      }),
      new CopyPlugin([
        {
          from: 'image/images/*',
          to: 'images',
        }
      ]),
    ],
    resolve: {
      alias: this.appConfig.namespaces,
    },
  }
}
