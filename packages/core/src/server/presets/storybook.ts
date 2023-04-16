import { ProgressPlugin } from 'webpack';
import AppConfig from '../../AppConfig';

export function name(appConfig: AppConfig) {
  return 'storybook';
}

interface StorybookConfig {
  mode: 'performance' | 'standard';
}

export function defaultConfig(appConfig: AppConfig): StorybookConfig {
  return {
    mode: 'performance',
  };
}

export function webpack(appConfig: AppConfig) {
  const resultWebpack = {
    devtool: appConfig.environment === 'development' ? 'eval' : 'source-map',
  };

  return resultWebpack;
}

export function webpackFinal(
  appConfig: AppConfig,
  webpackConfig: any,
  config: StorybookConfig
): any {
  if (appConfig.type === 'storybook' && config.mode === 'performance') {
    // MEDIUM performance impact
    // Disable sourcemaps
    webpackConfig.devtool = false;

    webpackConfig.plugins = webpackConfig.plugins.filter(
      (plugin) => plugin.constructor.name !== 'WatchMissingNodeModulesPlugin'
    );

    webpackConfig.plugins = webpackConfig.plugins.filter(
      (plugin) => plugin.constructor.name !== 'ProgressPlugin'
    );

    webpackConfig.plugins.push(
      new ProgressPlugin({
        activeModules: false,
        entries: true,
        modules: true,
        modulesCount: 5000,
        profile: true,
        dependencies: true,
        dependenciesCount: 10000,
        percentBy: null,
      })
    );
    webpackConfig.output.pathinfo = false;
  }
  return webpackConfig;
}
