import path from 'path';
import AppConfig from './AppConfig';

const merge = require('merge-deep');
const yargs = require('yargs');

const configStub = require('./stubs/defaultWingsuitConfig.stub');

export function resolveConfig(
  appName: string,
  environment = 'development',
  configurationOverwrites: any = {},
  wingsuitConfig: any = null
): AppConfig {
  const projectConfig =
    // eslint-disable-next-line global-require,import/no-dynamic-require
    wingsuitConfig != null ? wingsuitConfig : require(`${process.cwd()}/wingsuit.config`);
  let mergedConfig = merge(configStub.wingsuit, projectConfig);

  if (projectConfig.webpack) {
    mergedConfig.webpack = projectConfig.webpack;
  }
  if (projectConfig.webpackFinal) {
    mergedConfig.webpackFinal = projectConfig.webpackFinal;
  }

  if (projectConfig.extend != null) {
    mergedConfig = merge(mergedConfig, projectConfig.extend);
  }
  let appConfig = mergedConfig.apps[appName];

  if (
    projectConfig.apps != null &&
    projectConfig.apps[appName] != null &&
    projectConfig.apps[appName].presets != null &&
    projectConfig.apps[appName].presets.length !== 0
  ) {
    appConfig.presets = projectConfig.apps[appName].presets;
  }

  const rootPath = process.cwd();
  if (appConfig == null) {
    throw new Error(`No config found for app: ${appName}. Please check your wingsuit.config.`);
  }
  appConfig.presetsRegistry = {};
  Object.keys(mergedConfig.presets).forEach((name) => {
    appConfig.presetsRegistry[name] = mergedConfig.presets[name];
  });

  if (mergedConfig.environments[environment] != null) {
    appConfig = merge(appConfig, mergedConfig.environments[environment]);
  }
  // Overwrite by project config.
  if (projectConfig[appName] != null) {
    appConfig = Object.assign(appConfig, projectConfig[appName]);
  }
  // Overwrite by parameter.
  appConfig.webpack = mergedConfig.webpack;
  appConfig.webpackFinal = mergedConfig.webpackFinal;
  appConfig = Object.assign(appConfig, configurationOverwrites);
  appConfig.absRootPath = rootPath;
  appConfig.environment = environment;
  appConfig.absAppPath = path.join(rootPath, appConfig.path);
  appConfig.absDistFolder =
    yargs.argv['output-dir'] != null
      ? path.resolve(yargs.argv['output-dir'])
      : path.join(appConfig.absRootPath, appConfig.distFolder);
  const designSystem = mergedConfig.designSystems[appConfig.designSystem];
  if (designSystem == null) {
    throw new Error(
      `No designSystem found: ${appConfig.designSystem}. Please check your wingsuit.config.`
    );
  }
  appConfig.name = appName;
  appConfig.namespaces = designSystem.namespaces;
  appConfig.absDesignSystemPath = path.join(appConfig.absRootPath, designSystem.path);
  return appConfig;
}
