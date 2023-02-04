import path from 'path';

import { AppConfig, pathInfo } from '@wingsuit-designsystem/core';
import { renderer } from '@wingsuit-designsystem/pattern';
// import path from "path";

export function name(appConfig: AppConfig) {
  return 'twigjs';
}

interface TwigJsConfig {
  mode: string;
}

export function defaultConfig(appConfig: AppConfig): TwigJsConfig {
  return {
    mode: appConfig.type === 'storybook' ? 'load' : 'copy',
  };
}

export function webpack(appConfig: AppConfig, config: TwigJsConfig) {
  const { namespaces } = appConfig;
  if (config.mode === 'load') {
    renderer.setNamespaces(appConfig.namespaces);
    return {
      module: {
        rules: [
          {
            test: /\.twig$/,
            use: [
              {
                loader: 'twig-loader',
                options: {
                  twigOptions: {
                    namespaces,
                  },
                },
              },
            ],
          },
        ],
      },
    };
  }

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
    assetModuleFilename: appConfig.absDistFolder,
    module: {
      rules: loaderRules,
    },
  };
}
