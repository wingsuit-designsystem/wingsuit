import path from 'path';
import { AppConfig } from '@wingsuit-designsystem/core';
import FileDependencyPlugin from './plugins/FileDependencyPlugin';

export function name(appConfig: AppConfig) {
  return 'pattern';
}

export function webpack(appConfig: AppConfig) {
  const fileDependencyPlugin = new FileDependencyPlugin(
    appConfig.absDistFolder,
    appConfig.namespaces
  );
  fileDependencyPlugin.buildPatternNamespaceMap();
  return {
    resolveLoader: {
      alias: {
        'pattern-loader': path.join(__dirname, './loader/patternLoader'),
      },
    },
    plugins: [fileDependencyPlugin],
    module: {
      rules: [
        {
          test: /\.wingsuit\.ya?ml$/,
          loader: 'pattern-loader',
          options: {
            appConfig,
            fileDependencyPlugin,
          },
        },
      ],
    },
  };
}
