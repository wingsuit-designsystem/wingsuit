import { ProgressPlugin } from 'webpack';
import { AppConfig, getDefaultPreset, Config } from '@wingsuit-designsystem/core';
import path from 'path';

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
  if (appConfig.type === 'storybook') {
    return {
      resolveLoader: {
        alias: {
          'wingsuit-stories-loader': path.join(__dirname, './loader/wingsuitStoriesLoader'),
        },
      },
      module: {
        rules: [
          {
            test: /\.stories\.wingsuit\.jsx/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],
                },
              },
              {
                loader: 'wingsuit-stories-loader',
                options: {
                  appConfig,
                },
              },
            ],
          },
        ],
      },
    };
  }
  return {};
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

export function wingsuitConfig(): Config {
  return {
    apps: {
      storybook: {
        path: './apps/storybook',
        type: 'storybook',
        cssMode: 'hot',
        distFolder: 'dist/app-storybook',
        assetsDistFolder: '',
        designSystem: 'default',
        environment: 'develop',
        absAppPath: '',
        presets: [getDefaultPreset('assets'), '@wingsuit-designsystem/preset-pattern'],
        componentTypes: {
          wingsuit_presenter: 'Wingsuit component (UI Pattern) with presentation template',
          plain: 'Twig only component',
          plain_presenter: 'Twig only component with presentation template',
          presenter: 'Presentation template',
        },
        startup(passedArgs) {
          if (this.environment === 'production') {
            return `cross-env-shell NODE_ENV=${this.environment} storybook build --output-dir ${this.absDistFolder} --config-dir ${this.absAppPath} ${passedArgs}`;
          }
          return `cross-env-shell NODE_ENV=${this.environment} storybook dev --config-dir ${this.absAppPath}  ${passedArgs}`;
        },
      },
    },
  };
}
