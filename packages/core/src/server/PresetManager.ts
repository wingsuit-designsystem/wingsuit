/**
 * Wingsuit PresetManager.
 */
import { DefinePlugin } from 'webpack';
import AppConfig, { PresetDefinition, Preset } from '../AppConfig';

// Library Imports
const merge = require('webpack-merge');
const { ProgressPlugin, ProvidePlugin } = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const css = require('./presets/css');
const babel = require('./presets/babel');
const assets = require('./presets/assets');
const storybook = require('./presets/storybook');
const drupal = require('./presets/drupal');
const twing = require('./presets/twing');
const svg = require('./presets/svg');
const assetsVideos = require('./presets/assetsVideos');

const defaultPresets: {} = {
  css,
  babel,
  assets,
  storybook,
  drupal,
  twing,
  svg,
  assetsVideos,
};

merge.multiple();

export default class PresetManager {
  private environment = 'production';

  public getDefaultPreset(name: string): Preset {
    return defaultPresets[name];
  }

  private getPresetName(preset: Preset, appConfig: AppConfig): any {
    return preset.name != null ? preset.name(appConfig) : Math.random();
  }

  private getPresetParameter(preset: Preset, appConfig: AppConfig, providedConfig: any): any {
    const defaultConfig = preset.defaultConfig != null ? preset.defaultConfig(appConfig) : {};
    const appParameter = appConfig.getParameters(this.getPresetName(preset, appConfig));
    return Object.assign(defaultConfig, appParameter, providedConfig);
  }

  private getPresetDefinitions(appConfig: AppConfig): PresetDefinition[] {
    const presets: PresetDefinition[] = [];
    appConfig.presets.forEach((item) => {
      if (typeof item === 'string') {
        // eslint-disable-next-line global-require,import/no-dynamic-require
        const lpreset = require(item);
        presets.push({
          preset: lpreset,
          name: this.getPresetName(lpreset, appConfig),
          parameters: this.getPresetParameter(lpreset, appConfig, {}),
        });
      } else if (Array.isArray(item)) {
        const name = item[0];
        let lpreset = name;
        if (typeof name === 'string') {
          // @ts-ignore
          // eslint-disable-next-line global-require,import/no-dynamic-require
          lpreset = require(name);
        }
        const parameters = item[1];
        presets.push({
          preset: lpreset,
          name: this.getPresetName(lpreset, appConfig),
          parameters: this.getPresetParameter(lpreset, appConfig, parameters),
        });
      } else if (typeof item === 'object') {
        presets.push(
          // @ts-ignore
          {
            preset: item,
            name: this.getPresetName(item, appConfig),
            parameters: this.getPresetParameter(item, appConfig, {}),
          }
        );
      }
    });
    return presets;
  }

  /**
   * Returns true if a feature is supported by an extension.
   *
   * @param name
   *   The feature name.
   *
   * @return boolean
   *   True if feature is supported.
   */
  public supportFeature(name, appConfig: AppConfig) {
    const presetDefinitions = this.getPresetDefinitions(appConfig);
    let support = false;
    Object.keys(presetDefinitions).forEach((key) => {
      const { preset } = presetDefinitions[key];
      if (preset != null && preset.supportFeature != null) {
        const presetSupport = preset.supportFeature(name);
        if (presetSupport === true) {
          support = true;
        }
      }
    });
    return support;
  }

  /**
   * Generates Wingsuit webpack config based on appConfig.
   *
   * @returns {*} - Fully merged and customized webpack config
   */
  public generateWebpack(appConfig: AppConfig, webpackConfigs: [] = []) {
    this.environment = appConfig.environment;
    const presets = this.getPresetDefinitions(appConfig);

    const shared: any = [];
    Object.keys(presets).forEach((key) => {
      if (presets[key] != null) {
        shared.push(presets[key].preset.webpack(appConfig, presets[key].parameters));
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
      if (presets[key].preset.webpackFinal != null) {
        config = presets[key].preset.webpackFinal(appConfig, config);
      }
    });

    config = appConfig.webpackFinal(appConfig, config);
    return config;
  }
}
