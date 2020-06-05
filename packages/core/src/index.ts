import Server from './server/Server';

import AppConfig from './AppConfig';

export { resolveConfig } from './resolveConfig';

export { BaseWebpackBundle } from './server/BaseWebpackBundle';

export { default as Server } from './server/Server';

const server = new Server();

const merge = require('merge-deep');

const configStub = require('./stubs/defaultWingsuitConfig.stub');

export function getAppPack(appConfig: AppConfig, webpacks: [] = []) {
  const pack = server.generateWebpack(appConfig, webpacks);
  return pack;
}

export function getAppNames(wingsuitConfig: any = null, type = null) {
  const projectConfig =
    // eslint-disable-next-line global-require,import/no-dynamic-require
    wingsuitConfig != null ? wingsuitConfig : require(`${process.cwd()}/wingsuit.config`);
  const mergedConfig = merge(configStub.wingsuit, projectConfig);
  const names: string[] = [];
  Object.keys(mergedConfig.apps).forEach((name) => {
    if (type === null || type === mergedConfig.apps[name].type) {
      names.push(name);
    }
  });
  return names;
}
