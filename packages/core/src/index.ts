import PresetManager from './server/PresetManager';

import AppConfig from './AppConfig';

import { getConfigBase } from './resolveConfig';

export { default as AppConfig } from './AppConfig';

export { resolveConfig } from './resolveConfig';

export { default as PresetManager } from './server/PresetManager';

const presetManager = new PresetManager();

export function getAppPack(appConfig: AppConfig, webpacks: [] = []) {
  const pack = presetManager.generateWebpack(appConfig, webpacks);
  return pack;
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
export function supportFeature(name, appConfig: AppConfig) {
  return presetManager.supportFeature(name, appConfig);
}

export function getDefaultPreset(name) {
  return presetManager.getDefaultPreset(name);
}

export function getAppTypes(wingsuitConfig: any = null) {
  const { mergedConfig } = getConfigBase();
  const names: string[] = [];
  Object.keys(mergedConfig.apps).forEach(name => {
    if (mergedConfig.apps[name].type === name) {
      names.push(name);
    }
  });
  return names;
}

export function getAppNames(wingsuitConfig: any = null, type = '') {
  const { mergedConfig } = getConfigBase();
  const names: string[] = [];
  Object.keys(mergedConfig.apps).forEach(name => {
    if (type === '' || type === mergedConfig.apps[name].type || name === type) {
      names.push(name);
    }
  });
  return names;
}
