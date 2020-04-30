/**
 * Wingsuit Design System.
 */
import IApp from "./IApp";
import AppConfig from "./AppConfig";
import StorybookApp from "./StorybookApp";
import * as path from "path";
import DrupalApp from "./DrupalApp";

// Library Imports
const merge = require('webpack-merge');
const {ProgressPlugin, ProvidePlugin} = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

merge.multiple();
// Plugins:production
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const configStub: AppConfig = require('./stubs/defaultAppConfig.stub');

interface CssModesType {
  hot: any;
  extract: any;
}

export default class Wingsuit {

  private cssModes: CssModesType;

  private app: IApp|null = null;

  private environment = 'production';

  constructor() {

    /**
     * CSS modes are import to frontend dev. Wingsuit currently supports hot
     * reloading or full css file extraction.
     */
    this.cssModes = {
      // 'hot' uses the style-loader plugin which rewrites CSS inline via
      // webpack-dev-server and is purely development-mode ONLY. style-loader
      // CANNOT exists alongside MiniCsExtractPlugin
      hot: {
        // Webpack for hot starts here
        module: {
          rules: [
            {
              test: /\.css$/,
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
              test: /\.css$/,
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
    return this.cssModes;
  }

  private resolveAppConfig(module: NodeModule): AppConfig {
    const config = module.require('./wingsuit.app.config');
    config.path = path.dirname(module.filename);
    const mergedConfigs = Object.assign(configStub, config);
    return mergedConfigs;
  }

  private getApp(module: NodeModule): IApp {
    if (this.app === null) {
      const config: AppConfig = this.resolveAppConfig(module);
      if (config.type === 'storybook') {
        this.app = new StorybookApp(config, module);
      }else if (config.type === 'drupal') {
        this.app = new DrupalApp(config, module);
      } else {
        throw new Error(`No app found. Check wingsuit.app.config. ${JSON.stringify(config)}`);
      }
    }
    return this.app;
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
  public generateWebpack(environment: string, module: NodeModule, options) {
    const cssModes = this.getCssModes();
    this.environment = environment;
    const app: IApp = this.getApp(module);

    return merge.smartStrategy({
      // Prepend the css style-loader vs MiniExtractTextPlugin
      'module.rules.use': 'prepend',
    })(
      // Wingsuit shared standard config
      this.getSharedWebpackConfig(),
      // What kind of CSS handling, defaults to extract
      options.cssMode ? cssModes[options.cssMode] : cssModes.extract,
      // Design system-specific config
      environment === 'production'
        ? app.getProductionWebpackConfig()
        : app.getDevelopmentWebpackConfig(),
      // App config shared between dev and prod modes
      app.getSharedWebpackConfig()
    );
  }

  /**
   * Wingsuit shard config.
   *
   * The shared loaders, plugins, and processing that all our "apps" should use.
   */
  public getSharedWebpackConfig() {
    return {
      mode: this.environment,
      output: {
        filename: '[name].js',
      },
      node: {
      },
      devtool: this.environment === 'development' ? 'eval' : 'source-map',
      module: {
        rules: [
          {
            test: /\.css$/,
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
          },
        ],
      },

      optimization: {
        minimizer: [
          new TerserPlugin({
            sourceMap: this.environment === 'production',
          }),
        ],
      },
      plugins: [
        new ProgressPlugin({profile: false}),
        new ProvidePlugin({}),
      ],
    };
  }
}
