import {BaseConfigBundle} from "../BaseConfigBundle";
import BaseApp from "../BaseApp";

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


export default class CssBundle extends BaseConfigBundle {
  public static create(app: BaseApp) {
    return new CssBundle('css', app);
  }

  public getSharedWebpackConfig(): {} {
    return this.cssModes[this.appConfig.cssMode];
  }

  private loader = [
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    },

    {
      // PostCSS config at ./postcss.config.js
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        ident: 'postcss',
        config: {
          path: 'postcss.config.js',
        },
      },
    },
    {
      loader: 'resolve-url-loader',
      options: {
        sourceMap: true,
        root: '',
      },
    },
  ];

  /**
   * CSS modes are import to frontend dev. Wingsuit currently supports hot
   * reloading or full css file extraction.
   */
  protected cssModes = {
    // 'hot' uses the style-loader plugin which rewrites CSS inline via
    // webpack-dev-server and is purely development-mode ONLY. style-loader
    // CANNOT exists alongside MiniCsExtractPlugin
    hot: {
      // Webpack for hot starts here
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {loader: 'style-loader'},
              ... this.loader
            ],
          },
        ],
      },
    },
    // 'extract' uses MiniCssExtractPlugin.loader to write out actual CSS files to
    // the filesystem. This is useful for production builds, and webpack --watch
    extract: {
      // Webpack for extract starts here
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [

              {
                loader: MiniCssExtractPlugin.loader,
                options: {publicPath: './'},
              },
              ... this.loader,
            ],
          },
        ],
      },
      plugins: [
        new OptimizeCSSAssetsPlugin({
          // Ensure css map file output
          cssProcessorOptions: {
            map: {
              inline: false,
              annotation: true,
            },
          },
        }),
        new MiniCssExtractPlugin({
          filename: '[name].styles.css',
          chunkFilename: '[id].css',
        }),
      ],
    },
  };
}