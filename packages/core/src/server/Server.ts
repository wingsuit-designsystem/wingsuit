/**
 * Wingsuit Design System.
 */
import AppConfig from "./AppConfig";
import * as path from "path";
import BaseApp from "./BaseApp";
import ConfigBundle from "./ConfigBundle";

// Library Imports
const merge = require('webpack-merge');
const {ProgressPlugin, ProvidePlugin} = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const appConfigStub = require('./stubs/defaultAppConfig.stub');

merge.multiple();
// Plugins:production

interface BundleItems {
  [key: string]: ConfigBundle;
}
export default class Server {

  private app: BaseApp|null = null;

  private environment = 'production';

  private bundles:{} = {};

  public addConfigBundle(bundle: ConfigBundle) {
    this.bundles[bundle.getName()] = bundle;
  }

  public getBundles(): BundleItems {
    return this.bundles;
  }

  private resolveAppConfig(module: NodeModule): AppConfig {
    const config = module.require('./wingsuit.app.config');
    config.path = path.dirname(module.filename);
    const mergedConfigs = Object.assign(appConfigStub, config);
    return mergedConfigs;
  }

  public getApp(module: NodeModule): BaseApp {
    if (this.app === null) {
      const config: AppConfig = this.resolveAppConfig(module);
      this.app = new BaseApp(config, module);
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
  public generateWebpack(environment: string, module: NodeModule) {
    this.environment = environment;
    const bundles = this.getBundles();
    const shared:any = [];
    const environmentSpe:any = [];
    Object.keys(bundles).forEach((key) => {
      shared.push(bundles[key].getSharedWebpackConfig());
    });
    Object.keys(bundles).forEach((key) => {
      environmentSpe.push(environment === 'production' ? bundles[key].getProductionWebpackConfig(): bundles[key].getDevelopmentWebpackConfig());
    });

    return merge.smartStrategy({
      // Prepend the css style-loader vs MiniExtractTextPlugin
      'module.rules.use': 'prepend',
    })(

      ...shared,
      ...environmentSpe
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
