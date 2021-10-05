import path from 'path';
import AppConfig from '../../AppConfig';
// import FileDependencyPlugin from '../plugins/FileDependencyPlugin';

export function name(appConfig: AppConfig) {
  return 'twing';
}

export function webpack(appConfig: AppConfig) {
  // const fileDependencyPlugin = new FileDependencyPlugin( appConfig);
  return {
    resolveLoader: {
      alias: {
        'twing-loader': path.join(__dirname, '../loader/twingLoader'),
      },
    },
    module: {
      rules: [
        {
          test: /\.twig$/,
          use: [
            {
              loader: 'twing-loader',
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
