import path from 'path';

import PresetManager from './server/PresetManager';

import AppConfig from './AppConfig';

import { getConfigBase, resolveConfig } from './resolveConfig';

const fs = require('fs-extra');

export { default as AppConfig } from './AppConfig';

export { resolveConfig } from './resolveConfig';

export { csfParser } from './server/csfParser';

export { default as PresetManager } from './server/PresetManager';

const presetManager = new PresetManager();

interface PresetResult {
  [key: string]: string;
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

export function getDefaultPreset(name) {
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
  const results: PresetResult = invokePreset(appConfig, 'hooks', {});
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

export function invokePreset(appConfig:AppConfig, funcName, config): PresetResult {
  const result: PresetResult = {};
  const executed = {};
  const definitions = presetManager.getPresetDefinitions(appConfig);
  definitions.forEach((def) => {
    if (def.preset[funcName] && !executed[def.name]) {
      const defaultConfig =
        def.preset.defaultConfig !== undefined ? def.preset.defaultConfig(appConfig) : {};
      const finalConfig = { ...defaultConfig, ...config };
      result[appConfig.name] = def.preset[funcName](appConfig, finalConfig);
      executed[def.name] = true;
    }
  });
  return result;
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
