/**
 * Wingsuit Design System.
 */
import AppConfig from '../AppConfig';
import WebpackBundle from './WebpackBundle';

// Library Imports
const merge = require('webpack-merge');
const { ProgressPlugin, ProvidePlugin } = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

merge.multiple();

export default class Server {
  private environment = 'production';

  private getWebpackBundles(appConfig: AppConfig): WebpackBundle[] {
    const bundles: WebpackBundle[] = [];
    appConfig.webpackBundles.forEach((name) => {
      bundles.push(new appConfig.webpackBundleRegistry[name](name, appConfig));
    });
    return bundles;
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
  public generateWebpack(appConfig: AppConfig, webpackConfigs: [] = []) {
    this.environment = appConfig.environment;
    const bundles = this.getWebpackBundles(appConfig);
    const shared: any = [];
    const environmentSpe: any = [];
    Object.keys(bundles).forEach((key) => {
      shared.push(bundles[key].getSharedWebpackConfig());
    });
    Object.keys(bundles).forEach((key) => {
      environmentSpe.push(
        appConfig.environment === 'production'
          ? bundles[key].getProductionWebpackConfig()
          : bundles[key].getDevelopmentWebpackConfig()
      );
    });
    let config = merge.smartStrategy({
      // Prepend the css style-loader vs MiniExtractTextPlugin
      entry: 'append',
      'module.rules.use': 'replace',
    })(
      ...environmentSpe,
      ...shared,
      ...webpackConfigs,
      ...[
        {
          mode: this.environment,
          devtool: this.environment === 'development' ? 'eval' : 'source-map',
          optimization: {
            minimizer: [
              new TerserPlugin({
                sourceMap: this.environment === 'production',
              }),
            ],
          },
          plugins: [new ProgressPlugin({ profile: false }), new ProvidePlugin({})],
        },
      ]
    );

    Object.keys(bundles).forEach((key) => {
      config = bundles[key].alterFinalConfig(config);
    });
    return config;
  }
}
