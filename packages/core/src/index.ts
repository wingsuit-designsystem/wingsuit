import path from 'path';

import PresetManager from './server/PresetManager';

import AppConfig from './AppConfig';

import { getConfigBase, resolveConfig } from './resolveConfig';

const fs = require('fs-extra');

export { default as AppConfig } from './AppConfig';

export { resolveConfig } from './resolveConfig';

export { default as PresetManager } from './server/PresetManager';

const presetManager = new PresetManager();

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

export function getDefaultPreset(name) {
  return presetManager.getDefaultPreset(name);
}

export function invokePreset(funcName, config) {
  const apps = getApps();
  const result = {};
  const executed = {};
  apps.forEach((appConfig) => {
    const definitions = presetManager.getPresetDefinitions(appConfig);
    definitions.forEach((def) => {
      if (def.preset[funcName] !== undefined && executed[def.name] === undefined) {
        const defaultConfig =
          def.preset.defaultConfig !== undefined ? def.preset.defaultConfig(appConfig) : {};
        const finalConfig = { ...defaultConfig, ...config };
        result[appConfig.name] = def.preset[funcName](apps, finalConfig);
        executed[def.name] = true;
      }
    });
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

// Check for recursion
const syncIsRunning = {};
export function syncSilo(filename, data) {
  if (syncIsRunning[filename]) {
    return;
  }
  syncIsRunning[filename] = true;
  const output = JSON.stringify(data);
  setTimeout(() => {
    syncIsRunning[filename] = false;
  }, 2000);

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
