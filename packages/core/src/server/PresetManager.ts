/**
 * Wingsuit PresetManager.
 */
import { DefinePlugin } from 'webpack';
import AppConfig, { Preset } from '../AppConfig';

// Library Imports
const merge = require('webpack-merge');
const { ProgressPlugin, ProvidePlugin } = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

merge.multiple();

export default class PresetManager {
  private environment = 'production';

  private getPresets(appConfig: AppConfig): Preset[] {
    const presets: Preset[] = [];
    appConfig.presets.forEach((name) => {
      if (appConfig.presetsRegistry[name] != null) {
        presets.push(appConfig.presetsRegistry[name]);
      } else {
        // eslint-disable-next-line global-require,import/no-dynamic-require
        const lpreset = require(name);
        presets.push(lpreset);
      }
    });
    return presets;
  }

  /**
   * Generates Wingsuit webpack config based on appConfig.
   *
   * @returns {*} - Fully merged and customized webpack config
   */
  public generateWebpack(appConfig: AppConfig, webpackConfigs: [] = []) {
    this.environment = appConfig.environment;
    const presets = this.getPresets(appConfig);

    const shared: any = [];
    Object.keys(presets).forEach((key) => {
      if (presets[key] != null) {
        shared.push(presets[key].webpack(appConfig));
      }
    });
    let config = merge.smartStrategy({
      // Prepend the css style-loader vs MiniExtractTextPlugin
      entry: 'append',
      'module.rules.use': 'replace',
    })(
      ...shared,
      ...webpackConfigs,
      ...[
        appConfig.webpack(appConfig),
        {
          resolve: {
            alias: appConfig.namespaces,
          },
          output: {
            path: appConfig.absDistFolder,
          },
          mode: this.environment,
          devtool: this.environment === 'development' ? 'eval' : 'source-map',
          optimization: {
            minimizer: [
              new TerserPlugin({
                sourceMap: this.environment === 'production',
              }),
            ],
          },
          plugins: [
            new DefinePlugin({
              BUILD_TARGET: JSON.stringify(appConfig.name),
            }),
            new ProgressPlugin({ profile: false }),
            new ProvidePlugin({}),
          ],
        },
      ]
    );

    Object.keys(presets).forEach((key) => {
      if (presets[key].webpackFinal != null) {
        config = presets[key].webpackFinal(appConfig, config);
      }
    });

    config = appConfig.webpackFinal(appConfig, config);
    return config;
  }
}
