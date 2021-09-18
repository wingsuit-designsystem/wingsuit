import AppConfig from '../../AppConfig';

const loader = require('@wingsuit-designsystem/twing-loader');

export function name(appConfig: AppConfig) {
  return 'twing';
}

export function webpack(appConfig: AppConfig) {
  return {
    module: {
      rules: [
        {
          test: /\.twig$/,
          use: [
            {
              loader: '@wingsuit-designsystem/twing-loader',
              options: {
                namespaces: appConfig.namespaces,
              },
            },
          ],
        },
      ],
    },
  };
}
