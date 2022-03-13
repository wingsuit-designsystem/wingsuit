import path from 'path';
import AppConfig from '../../AppConfig';
import FileDependencyPlugin from '../plugins/FileDependencyPlugin';

export function name(appConfig: AppConfig) {
  return 'twing';
}

export function webpack(appConfig: AppConfig) {
  const fileDependencyPlugin = new FileDependencyPlugin(
    path.join(appConfig.absDistFolder, appConfig.twigDistFolder)
  );
  const entryPointPath = path.join(
    path.dirname(require.resolve('@wingsuit-designsystem/pattern')),
    'environment-entry.js'
  );
  const entryPoint =
    appConfig.type === 'storybook'
      ? [entryPointPath]
      : {
          assets: entryPointPath,
        };

  return {
    entry: entryPoint,
    resolveLoader: {
      alias: {
        'twing-loader': path.join(__dirname, '../loader/twingLoader'),
      },
    },
    plugins: [fileDependencyPlugin],
    module: {
      rules: [
        {
          test: /\.twig$/,
          use: [
            {
              loader: 'twing-loader',
              options: {
                appConfig,
                fileDependencyPlugin,
              },
            },
          ],
        },
      ],
    },
  };
}
