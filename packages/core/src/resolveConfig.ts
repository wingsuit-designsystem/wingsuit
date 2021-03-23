import path from 'path';
import AppConfig from './AppConfig';
import PresetManager from './server/PresetManager';

const merge = require('merge-deep');
const yargs = require('yargs');

const configStub = require('./stubs/defaultWingsuitConfig.stub');

export function resolveConfig(
  appName: string,
  environment = 'development',
  configurationOverwrites: any = {},
  wingsuitConfig: any = null,
  configPath: any = null
): AppConfig {
  const projectConfig =
    // eslint-disable-next-line global-require,import/no-dynamic-require
    wingsuitConfig != null ? wingsuitConfig : require(`${process.cwd()}/wingsuit.config`);
  let mergedConfig = merge(configStub.wingsuit, projectConfig);
  mergedConfig.absAppPath = '';

  // Extend wingsuit base config with preset configs.
  const presetManager = new PresetManager();
  const presets = presetManager.getPresetDefinitions(mergedConfig);

  Object.keys(presets).forEach((key) => {
    if (presets[key] != null && presets[key].preset.wingsuitConfig != null) {
      const presetWingsuitConfig = presets[key].preset.wingsuitConfig();
      mergedConfig = merge(mergedConfig, presetWingsuitConfig);
    }
  });

  let appConfig = mergedConfig.apps[appName];
  if (appConfig == null) {
    throw new Error(`No config found for app: ${appName}. Please check your wingsuit.config.`);
  }

  const rootPath = configPath != null ? configPath : process.cwd();
  if (mergedConfig.environments[environment] != null) {
    appConfig = merge(appConfig, mergedConfig.environments[environment]);
  }
  // Overwrite by project config.
  if (projectConfig[appName] != null) {
    appConfig = Object.assign(appConfig, projectConfig[appName]);
  }

  mergedConfig.presets.forEach((preset) => {
    appConfig.presets.push(preset);
  });

  appConfig.getParameters = (name) => {
    return appConfig.parameters[name] != null ? appConfig.parameters[name] : {};
  };

  appConfig.webpack =
    mergedConfig.webpack !== null
      ? mergedConfig.webpack
      : (pappConfig: AppConfig) => {
          return {};
        };
  appConfig.webpackFinal =
    mergedConfig.webpackFinal !== null
      ? mergedConfig.webpackFinal
      : (pappConfig: AppConfig, config: any) => {
          return config;
        };
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
