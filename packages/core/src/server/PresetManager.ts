/**
 * Wingsuit PresetManager.
 */
import AppConfig, { PresetDefinition, Preset } from '../AppConfig';

// Library Imports
const merge = require('webpack-merge');
const mergeDeep = require('merge-deep');
const { ProgressPlugin } = require('webpack');

const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const css = require('./presets/css');
const babel = require('./presets/babel');
const assets = require('./presets/assets');
const storybook = require('./presets/storybook');
const drupal = require('./presets/drupal');
const wingsuitP = require('./presets/wingsuit');
const assetsVideos = require('./presets/assetsVideos');

const defaultPresets = {
  css,
  babel,
  assetsVideos,
  assets,
  storybook,
  drupal,
  wingsuit: wingsuitP,
};

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
    const appParameter =
      appConfig.getParameters != null
        ? appConfig.getParameters(this.getPresetName(preset, appConfig))
        : {};
    return Object.assign(defaultConfig, appParameter, providedConfig);
  }

  public mergeWingsuitConfig(appConfig: AppConfig): any {
    const presets = this.getPresetDefinitions(appConfig);

    let mergedData = appConfig;
    presets.forEach((definition) => {
      if (typeof definition.preset.wingsuitConfig === 'function') {
        const hookResult = definition.preset.wingsuitConfig();
        mergedData = mergeDeep(mergedData, hookResult);
      }
    });

    return mergedData;
  }

  public getPresetDefinitions(appConfig: AppConfig): PresetDefinition[] {
    const presets: PresetDefinition[] = [];
    if (appConfig.presets) {
      appConfig.presets.forEach((item) => {
        if (typeof item === 'string') {
          const lpreset =
            // eslint-disable-next-line global-require,import/no-dynamic-require
            this.getDefaultPreset(item) != null ? this.getDefaultPreset(item) : require(item);
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
    }
    presets.forEach((presetDef) => {
      if (presetDef.preset.configKey) {
        const key = presetDef.preset.configKey(appConfig);
        const foundPreset = presets.find(
          (def) => def.preset.name && def.preset.name(appConfig) === key
        );
        if (foundPreset && foundPreset.preset) {
          // eslint-disable-next-line no-param-reassign
          presetDef.parameters = foundPreset.parameters;
        }
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
  public generateWebpack(appConfig: AppConfig, webpackConfigs: any[] = []) {
    this.environment = appConfig.environment ? appConfig.environment : 'development';
    const presets = this.getPresetDefinitions(appConfig);
    const shared: any = [];
    Object.keys(presets).forEach((key) => {
      if (presets[key] != null && presets[key].preset.webpack != null) {
        shared.push(presets[key].preset.webpack(appConfig, presets[key].parameters));
      }
    });

    let config = merge.mergeWithCustomize({
      // Prepend the css style-loader vs MiniExtractTextPlugin
      entry: 'append',
      'module.rules.use': 'replace',
    })(
      ...shared,
      ...webpackConfigs,
      ...[
        appConfig.webpack ? appConfig.webpack(appConfig) : {},
        {
          resolve: {
            alias: { ...appConfig.namespaces, ...appConfig.wsNamespaces },
          },
          mode: this.environment,
          optimization: {
            minimizer: [],
          },
          plugins: [new ProgressPlugin({ profile: false }), new NodePolyfillPlugin()],
        },
      ]
    );

    Object.keys(presets).forEach((key) => {
      if (presets[key].preset.webpackFinal != null) {
        config = presets[key].preset.webpackFinal(appConfig, config);
      }
    });

    config = appConfig.webpackFinal ? appConfig.webpackFinal(appConfig, config) : config;
    return config;
  }
}
