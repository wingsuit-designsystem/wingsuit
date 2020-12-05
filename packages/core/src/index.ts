import PresetManager from './server/PresetManager';

import AppConfig from './AppConfig';

export { default as AppConfig } from './AppConfig';

export { resolveConfig } from './resolveConfig';

export { default as PresetManager } from './server/PresetManager';

const presetManager = new PresetManager();

const merge = require('merge-deep');

const configStub = require('./stubs/defaultWingsuitConfig.stub');

export function getAppPack(appConfig: AppConfig, webpacks: [] = []) {
  const pack = presetManager.generateWebpack(appConfig, webpacks);
  return pack;
}

export function getAppNames(wingsuitConfig: any = null, type = '') {
  const projectConfig =
    // eslint-disable-next-line global-require,import/no-dynamic-require
    wingsuitConfig != null ? wingsuitConfig : require(`${process.cwd()}/wingsuit.config`);
  const mergedConfig = merge(configStub.wingsuit, projectConfig);
  const names: string[] = [];
  Object.keys(mergedConfig.apps).forEach(name => {
    if (type === '' || type === mergedConfig.apps[name].type) {
      names.push(name);
    }
  });
  return names;
}
