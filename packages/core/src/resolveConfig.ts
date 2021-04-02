import path from 'path';
import AppConfig, {defaultAppConfig} from './AppConfig';
import PresetManager from './server/PresetManager';

const merge = require('merge-deep');
const yargs = require('yargs');

const configStub = require('./stubs/defaultWingsuitConfig.stub');

/**
 * Resolves wingsuit config.
 *
 * @param appNameId
 *   The appNameId can contain app type and app id seperated by ":".
 *   Example:
 *     drupal:cms - drupal is app folder name. CMS is the preset app type
 *
 * @param environment
 *   The current environment.
 * @param configurationOverwrites
 *   Overrule the config.
 * @param wingsuitConfig
 *   The provided config.
 * @param configPath
 *   The path to the config.
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
  if (appNameId.split(':').length === 2) {
    [appName, type] = appNameId.split(':');
  }

  const projectConfig =
    // eslint-disable-next-line global-require,import/no-dynamic-require
    wingsuitConfig != null ? wingsuitConfig : require(`${process.cwd()}/wingsuit.config`);
  let mergedConfig = merge(configStub.wingsuit, projectConfig);
  mergedConfig.absAppPath = '';

  // Overrule logic.
  // 1. Merge config stub with presets configs.
  // 2. Overrule default config with merged config.
  // 3. Overrule with environment config.
  // 4. Overrule with project config.

  // Overrule with preset configs.
  const presetManager = new PresetManager();
  const presets = presetManager.getPresetDefinitions(mergedConfig);

  Object.keys(presets).forEach((key) => {
    if (presets[key] != null && presets[key].preset.wingsuitConfig != null) {
      const presetWingsuitConfig = presets[key].preset.wingsuitConfig();
      mergedConfig = merge(mergedConfig, presetWingsuitConfig);
    }
  });

  const rootPath = configPath != null ? configPath : process.cwd();

  // Overrule default config with merged config.
  let appConfig = merge(defaultAppConfig(type, rootPath), mergedConfig.apps[type]);

  // Overrule environment config.
  if (mergedConfig.environments[environment] != null) {
    appConfig = merge(appConfig, mergedConfig.environments[environment]);
  }

  // Overrule project config.
  if (projectConfig[appName] != null) {
    appConfig = merge(appConfig, projectConfig[appName]);
  }

  // Overrule hooks.
  appConfig.webpack =
    mergedConfig.webpack !== null
      ? mergedConfig.webpack
      : appConfig.webpack;
  appConfig.webpackFinal =
    mergedConfig.webpackFinal !== null
      ? mergedConfig.webpackFinal
      : appConfig.webpackFinal;

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
  appConfig.parameters = mergedConfig.parameters;
  appConfig.name = appName;
  appConfig.patternFolder = designSystem.patternFolder;
  appConfig.absDesignSystemPath = path.join(appConfig.absRootPath, designSystem.path);
  appConfig.absPatternPath = path.join(appConfig.absDesignSystemPath, appConfig.patternFolder);
  appConfig.namespaces = designSystem.namespaces;
  appConfig.namespaces.wsdesignsystem = appConfig.absDesignSystemPath;
  appConfig.namespaces.wspatterns = appConfig.absPatternPath;

  return appConfig;
}
