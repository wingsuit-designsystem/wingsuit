import AppConfig from '../../AppConfig';

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
              loader: 'raw-loader',
            },
          ],
        },
      ],
    },
  };
}
