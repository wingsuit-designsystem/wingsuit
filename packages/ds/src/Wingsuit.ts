/**
 * Wingsuit app to merge webpack config.
 */
import RootConfig from "./RootConfig";
import IApp from "./IApp";

import * as path from 'path';

// Library Imports
const merge = require('webpack-merge');
merge.multiple()
// Plugins:production
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


export default class Wingsuit {
  private _rootConfig: RootConfig;
  private _cssModes: {};
  get rootConfig() {
    return this._rootConfig;
  }

  constructor(rootConfig: RootConfig) {
    this._rootConfig = rootConfig;

    /**
     * CSS modes are import to frontend dev. Wingsuit currently supports hot
     * reloading or full css file extraction.
     */
    this._cssModes =
      {
        // 'hot' uses the style-loader plugin which rewrites CSS inline via
        // webpack-dev-server and is purely development-mode ONLY. style-loader
        // CANNOT exists alongside MiniCsExtractPlugin
        hot: {
          // Webpack for hot starts here
          module: {
            rules: [
              {
                test: /\.(sa|sc|c)ss$/,
                use: [{loader: 'style-loader'}],
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
                test: /\.(sa|sc|c)ss$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {publicPath: './'},
                  },
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

  public getCssModes() {
    return this._cssModes;
  }

  /**
   * Every app using Wingsuit must run its config through this "wingsuit"
   * function to ensure it adheres to Wingsuit standards of dev/prod config.
   *
   * @param {Object} appWebpack - The collection of shared, dev, prod webpack config
   * @param {Object} appWebpack.shared - Shared webpack config common to dev and prod
   * @param {Object} appWebpack.dev - Webpack config unique to dev
   * @param {Object} appWebpack.prod - Webpack config unique to prod
   * @param {Object} appConfig - Full app config
   * @param {Object} options - Compile options
   * @param {('hot'|'extract')} options.cssMode - The method of handling CSS output
   * @returns {*} - Fully merged and customized webpack config
   */
  public generateWebpack(environment: string, app: IApp, options) {
    const cssModes = this.getCssModes();
    // Dynamically pull in design system config. Must be named __webpack.config.js
    // eslint-disable-next-line

    return merge.smartStrategy({
      // Prepend the css style-loader vs MiniExtractTextPlugin
      'module.rules.use': 'prepend',
    })(
      // Wingsuit standard config
      this.getSharedWebpackConfig(),
      // What kind of CSS handling, defaults to extract
      options.cssMode ? cssModes[options.cssMode] : cssModes['extract'],
      // Design system-specific config
      environment === 'production' ? app.getProductionWebpackConfig() : app.getDevelopmentWebpackConfig(),
      // App config shared between dev and prod modes
      app.getSharedWebpackConfig(),
      // App config specific to dev or prod
      // NODE_ENV === 'development' ? dev : prod
    );
  };

  /**
   * Wingsuit shard config.
   *
   * The shared loaders, plugins, and processing that all our "apps" should use.
   */
  public getSharedWebpackConfig() {
    const {ProgressPlugin, ProvidePlugin} = require('webpack');

// Plugins
    const TerserPlugin = require('terser-webpack-plugin');

// Constants: environment
// NODE_ENV is set within all NPM scripts before running Webpack, eg:
//
//  "NODE_ENV='development' webpack-dev-server --config ./apps/pl/__webpack.config.js --hot",
//
// NODE_ENV is either:
// - development
// - production
// Defaults to 'production'
    const {NODE_ENV = 'production'} = process.env;
// Enable to track down deprecation during development
// process.traceDeprecation = true;

    return {
      // entry: {}, // See entryPrepend() and wingsuit() below for entry details
      mode: NODE_ENV, // development|production
      output: {
        filename: '[name].js',
      },
      devtool: NODE_ENV === 'development' ? 'eval' : 'source-map',
      module: {
        rules: [
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
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
            ],
          },
          {
            test: /\.(js|vue)$/,
            enforce: 'pre',
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: {
              emitWarning: true,
            },
          },
          {
            test: /\.js$/,
            // @babel runtime and core must NOT be transformed by babel
            exclude: /@babel(?:\/|\\{1,2})runtime|core-js/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]?[hash]',
            },
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
          }
        ],
      },
      optimization: {
        minimizer: [
          new TerserPlugin({
            sourceMap: NODE_ENV === 'production',
          }),
        ],
      },
      plugins: [
        new ProgressPlugin({profile: false}),
        // Provides "global" vars mapped to an actual dependency. Allows e.g. jQuery
        // plugins to assume that `window.jquery` is available
        new ProvidePlugin({}),
        // Handle .vue files
      ],
    };
  }
}