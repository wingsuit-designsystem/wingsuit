import path from 'path';

import PresetManager from './server/PresetManager';

import AppConfig, { Preset } from './AppConfig';

import { getConfigBase, resolveConfig } from './resolveConfig';

const fs = require('fs-extra');

export { default as AppConfig } from './AppConfig';

export { default as Config } from './Config';

export { resolveConfig } from './resolveConfig';

export { default as PresetManager } from './server/PresetManager';

const presetManager = new PresetManager();

interface PresetResult {
  [key: string]: any;
}

export interface PathInfo {
  namespace: string;
  path: string;
}

export function getAppPack(appConfig: AppConfig, webpacks: any[] = []) {
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

/**
 * Return namespace and path for given resourcePath.
 *
 * @param resourcePath
 *   The resourcePath.
 * @param appConfig
 *   The appConfig.
 *
 * @return
 *   Returns path and namespace.
 */
export function pathInfo(resourcePath, appConfig: AppConfig): PathInfo | null {
  const { namespaces } = appConfig;
  let namespaceInfo: PathInfo = {
    namespace: '',
    path: '',
  };
  let found = false;
  Object.keys(namespaces).forEach((key) => {
    if (found === false && resourcePath.substr(0, namespaces[key].length) === namespaces[key]) {
      namespaceInfo = {
        namespace: key,
        path: resourcePath.substr(namespaces[key].length + 1),
      };
      found = true;
    }
  });

  return found ? namespaceInfo : null;
}

export function getDefaultPreset(name): Preset {
  return presetManager.getDefaultPreset(name);
}

/**
 * Invoke function for all presets.
 *
 * @param funcName
 *   The functionName to invoke.
 * @param config
 *   The config
 */

export function invokeHook(appConfig, hookName, data: any[] | null = null): PresetResult {
  const providedArgs = data ?? [];
  const hookResults: PresetResult = {};
  const results: PresetResult = invokePresets(appConfig, 'hooks', {});
  Object.entries(results).forEach(([key, hookImpl]) => {
    Object.values(hookImpl).forEach((func) => {
      if (typeof func === 'function') {
        // @ts-ignore
        hookResults[key] = func(...providedArgs);
      }
    });
  });
  return hookResults;
}

export function invokePresets(appConfig: AppConfig, funcName, config): PresetResult {
  const result: PresetResult = {};
  const definitions = presetManager.getPresetDefinitions(appConfig);
  definitions.forEach((def) => {
    if (def.preset[funcName]) {
      result[def.name] = def.preset[funcName](appConfig, def.parameters);
    }
  });
  return result;
}

export function stories(
  appConfig: AppConfig,
  exclude: string[] = [],
  config: any = null
): string[] {
  const result = invokePresets(appConfig, 'stories', config);
  const resultStories: string[] = [];
  Object.entries(result).forEach(([key, storiesOf]) => {
    if (!exclude.includes(key)) {
      resultStories.push(...storiesOf);
    }
  });
  return resultStories;
}
export function getAppTypes(wingsuitConfig: any = null) {
  const { mergedConfig } = getConfigBase();
  const names: string[] = [];
  Object.keys(mergedConfig.apps).forEach((name) => {
    if (mergedConfig.apps[name].type === name) {
      names.push(name);
    }
  });
  return names;
}

export function getApps(wingsuitConfig: any = null, environment = 'development'): AppConfig[] {
  const { mergedConfig } = getConfigBase();
  const apps: AppConfig[] = [];
  Object.keys(mergedConfig.apps).forEach((name) => {
    const app = resolveConfig(name, environment, null, wingsuitConfig);
    apps.push(app);
  });
  return apps;
}

export function getAppNames(wingsuitConfig: any = null, type = '') {
  const { mergedConfig } = getConfigBase();
  const names: string[] = [];
  Object.keys(mergedConfig.apps).forEach((name) => {
    if (type === '' || type === mergedConfig.apps[name].type || name === type) {
      names.push(name);
    }
  });
  return names;
}

export function syncSilo(filename, data) {
  const output = JSON.stringify(data);
  fs.readFile(filename, (readerr, buffer) => {
    // Only write output if there is a difference or non-existent target file
    const existingJson = buffer ? buffer.toString() : '';
    if (readerr || output !== existingJson) {
      const dir = path.dirname(filename);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFile(filename, output, (writeerr) => {
        if (writeerr) console.error(writeerr);
      });
    }
  });
}
