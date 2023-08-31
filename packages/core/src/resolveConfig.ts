import path from 'path';
import fs from 'fs';
import AppConfig, { defaultAppConfig } from './AppConfig';
import PresetManager from './server/PresetManager';
import { invokeHook } from './index';

const merge = require('merge-deep');
const yargs = require('yargs');

const configStub = require('./stubs/defaultWingsuitConfig.stub');

/**
 * Returns the wingsuit base config.
 *
 * @param wingsuitConfig
 *   The provided config.
 *
 * @return {mergedObject, projectConfig}
 *   Returns two objects
 *    - The complete merged configuration including all presets.
 *    - The wingsuit.config.js
 */
export function getConfigBase(wingsuitConfig: any = null): any {
  const projectConfig =
    // eslint-disable-next-line global-require,import/no-dynamic-require
    wingsuitConfig != null ? wingsuitConfig : require(`${process.cwd()}/wingsuit.config`);
  const mergedConfig = merge(configStub.wingsuit, projectConfig);
  mergedConfig.absAppPath = '';

  // Overrule logic.
  // 1. Merge config stub with presets configs.
  // 2. Overrule default config with merged config.
  // 3. Overrule with environment config.
  // 4. Overrule with project config.

  // Overrule with preset configs.
  const presetManager = new PresetManager();
  const finalMergedConfig = presetManager.mergeWingsuitConfig(mergedConfig);
  return { mergedConfig: finalMergedConfig, projectConfig };
}

/**
 * Resolves wingsuit config.
 *
 * @param appNameId
 *   The appNameId can contain app type and app id seperated by ":".
 *   Example:
 *     drupal:cms - drupal is app name. CMS is the preset app type
 *
 * @param environment
 *   The current environment.
 * @param configurationOverwrites
 *   Overrule the config.
 * @param wingsuitConfig
 *   The provided config.
 * @param configPath
 *   The path to the config.
 *
 * @return AppConfig
 *   The appConfig
 */
export function resolveConfig(
  appNameId: string,
  environment = 'development',
  configurationOverwrites: any = {},
  wingsuitConfig: any = null,
  configPath: any = null
): AppConfig {
  let appName = appNameId;
  let type = appNameId;
  let typeOverwritten = false;
  if (appNameId.split(':').length === 2) {
    [appName, type] = appNameId.split(':');
    typeOverwritten = true;
  }
  const { mergedConfig, projectConfig } = getConfigBase(wingsuitConfig);
  projectConfig.apps = projectConfig.apps ?? {};
  if (!projectConfig.apps[appName] && !mergedConfig.apps[appName]) {
    throw new Error(`App ${appName} not found. Check your apps section in your wingsuit.config.js`);
  }
  type =
    !typeOverwritten && projectConfig.apps[appName]?.type ? projectConfig.apps[appName].type : type;

  const rootPath = configPath != null ? configPath : process.cwd();
  // Overrule default config with merged config.
  let appConfig = merge(defaultAppConfig(type, rootPath), mergedConfig.apps[type]);

  // Overrule environment config.
  if (mergedConfig.environments[environment]) {
    appConfig = merge(appConfig, mergedConfig.environments[environment]);
  }

  // Overrule project config.
  if (projectConfig?.apps[appName]) {
    appConfig = merge(appConfig, projectConfig.apps[appName]);
  }

  const overloadedFunctions = ['startup', 'generator'];
  overloadedFunctions.forEach((funcName) => {
    if (mergedConfig.apps[type]) {
      appConfig[funcName] = mergedConfig.apps[type][funcName]
        ? mergedConfig.apps[type][funcName]
        : appConfig[funcName];
    }

    if (
      projectConfig.apps != null &&
      projectConfig.apps[appName] != null &&
      projectConfig.apps[appName][funcName] !== undefined
    ) {
      appConfig[funcName] = projectConfig.apps[appName][funcName];
    }
  });

  // Overrule hooks.
  appConfig.webpack = mergedConfig.webpack ?? appConfig.webpack;
  appConfig.webpackFinal = mergedConfig.webpackFinal ?? appConfig.webpackFinal;

  mergedConfig.presets.forEach((preset) => {
    appConfig.presets.push(preset);
  });

  appConfig.getParameters = (name) => {
    return appConfig.parameters[name] != null ? appConfig.parameters[name] : {};
  };

  appConfig = Object.assign(appConfig, configurationOverwrites);
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
  Object.entries(designSystem.namespaces).forEach(([namespace, fullPath]) => {
    if (typeof fullPath === 'string') {
      if (!fs.existsSync(fullPath)) {
        // eslint-disable-next-line no-console
        console.log(
          `Path ${fullPath} for ${namespace} doesn't exists. Please remove it from namespace configuration.`
        );
        delete designSystem.namespaces[namespace];
      }
    }
  });
  appConfig.parameters = mergedConfig.parameters;
  appConfig.name = appName;
  appConfig.patternFolder = designSystem.patternFolder;
  appConfig.absDesignSystemPath = path.join(appConfig.absRootPath, designSystem.path);
  appConfig.absPatternPath = path.join(appConfig.absDesignSystemPath, appConfig.patternFolder);
  appConfig.namespaces = designSystem.namespaces;
  appConfig.wsNamespaces = {};
  appConfig.wsNamespaces.wsdesignsystem = appConfig.absDesignSystemPath;
  appConfig.wsNamespaces.wsdata = path.join(appConfig.absRootPath, appConfig.wsdata ?? 'apps/data');
  appConfig.wsNamespaces.wspatterns = appConfig.absPatternPath;
  appConfig.wsNamespaces.wsapp = appConfig.absAppPath;
  if (mergedConfig.postCssConfig != null) {
    appConfig.postCssConfig = Object.assign(appConfig.postCssConfig, mergedConfig.postCssConfig);
  }
  invokeHook(appConfig, 'appConfigAlter');
  appConfig.internalCache = {};
  return appConfig;
}
