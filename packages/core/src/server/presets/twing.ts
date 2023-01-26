import path from 'path';
import AppConfig from '../../AppConfig';
import FileDependencyPlugin from '../plugins/FileDependencyPlugin';

export function name(appConfig: AppConfig) {
  return 'twing';
}

export function webpack(appConfig: AppConfig) {
  return {};
  const fileDependencyPlugin = new FileDependencyPlugin(
    path.join(appConfig.absDistFolder, appConfig.twigDistFolder)
  );

  return {
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
