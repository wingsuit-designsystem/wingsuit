/**
 * Wingsuit PresetManager.
 */
import AppConfig, {Preset} from '../AppConfig';
import {DefinePlugin} from "webpack";

// Library Imports
const merge = require('webpack-merge');
const {ProgressPlugin, ProvidePlugin} = require('webpack');
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
        console.log(`No preset ${name} found in registry.`);
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
          output: {
            path: appConfig.absDistFolder,
          },
          resolve: {
            alias: appConfig.namespaces,
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
          plugins: [new DefinePlugin({
            BUILD_TARGET: JSON.stringify(appConfig.name),
          }), new ProgressPlugin({profile: false}), new ProvidePlugin({})],
        },
      ]
    );

    Object.keys(presets).forEach((key) => {
      if (presets[key].webpackFinal != null) {
        config = presets[key].webpackFinal(appConfig, config);
      }

    });
    config = appConfig.webpackFinal(appConfig, config);
    console.log(config.module.rules);
    return config;
  }
}
