import AppConfig from "./AppConfig";
import path from "path";
const merge = require('merge-deep');
// import mergeWith from 'lodash/mergeWith'

const configStub = require('./stubs/defaultWingsuitConfig.stub');

export function resolveConfig(appName: string, environment:string, configurationOverwrites: any = {}, wingsuitConfig: any = null): AppConfig {
  let projectConfig = wingsuitConfig;
  if (wingsuitConfig == null) {
    projectConfig = require(`${process.cwd()}/wingsuit.config`)
  }
  const mergedConfig = merge(configStub.wingsuit, projectConfig);
  let appConfig = mergedConfig.apps[appName];
  const rootPath = process.cwd();
  if (appConfig == null) {
    throw new Error(`No config found for app: ${appName}. Please check your wingsuit.config.`);
  }

  if (mergedConfig.environments[environment] != null) {
    appConfig = merge(appConfig, mergedConfig.environments[environment]);
  }
  // Overwrite by project config.
  if (projectConfig[appName] != null) {
    appConfig = Object.assign(appConfig, projectConfig[appName]);
  }
  // Overwrite by parameter.
  appConfig = Object.assign(appConfig, configurationOverwrites);
  appConfig.absRootPath = rootPath;
  appConfig.environment = environment;
  appConfig.absAppPath = path.join(rootPath, appConfig.path);
  appConfig.absDistFolder = path.join(appConfig.absRootPath, appConfig.distFolder);
  const designSystem = mergedConfig.designSystems[appConfig.designSystem];
  if (designSystem == null) {
    throw new Error(`No designSystem found: ${appConfig.designSystem}. Please check your wingsuit.config.`);
  }
  appConfig.name = appName;
  appConfig.namespaces = designSystem.namespaces;
  appConfig.absDesignSystemPath = path.join(appConfig.absRootPath, designSystem.path);
  console.log(appConfig);
  return appConfig;
}