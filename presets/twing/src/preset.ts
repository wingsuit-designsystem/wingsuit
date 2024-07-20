import path from 'path';

import { AppConfig, pathInfo } from '@wingsuit-designsystem/core';
import { renderer } from '@wingsuit-designsystem/pattern';

export function name(appConfig: AppConfig) {
  return 'twing';
}

interface TwingConfig {
  mode: string;
}

export function defaultConfig(appConfig: AppConfig): TwingConfig {
  return {
    mode: appConfig.type === 'storybook' ? 'load' : 'copy',
  };
}

export function webpack(appConfig: AppConfig, config: TwingConfig) {
  if (config.mode === 'load') {
    renderer.setNamespaces(appConfig.namespaces);
    let environmentPath = '';
    try {
      environmentPath = require.resolve(`${process.cwd()}/wingsuit.twing.environment.js`);
    } catch (e) {
      environmentPath = require.resolve('./environment');
    }

    return {
      module: {
        rules: [
          {
            test: /\.twig$/,
            use: [
              {
                loader: 'twing-loader',
                options: {
                  environmentModulePath: environmentPath,
                },
              },
            ],
          },
        ],
      },
    };
  }
  const { namespaces } = appConfig;
  const loaderRules: any[] = [];
  Object.entries(namespaces).forEach(([namespace, namespacePath]) => {
    loaderRules.push({
      test: /\.twig$/,
      type: 'asset/resource',
      generator: {
        filename: (arg: any) => {
          const { resource } = arg.module;
          const pInfo = pathInfo(resource, appConfig);
          return path.join('templates', pInfo?.namespace ?? 'unknow', pInfo?.path ?? '[name][ext]');
        },
      },
    });
  });
  return {
    module: {
      rules: loaderRules,
    },
  };
}
