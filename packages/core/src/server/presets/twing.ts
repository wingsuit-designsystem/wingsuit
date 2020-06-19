import AppConfig from '../../AppConfig';

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
