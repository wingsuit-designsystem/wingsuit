import { AppConfig } from '@wingsuit-designsystem/core';

export function name(appConfig: AppConfig) {
  return 'twing-loader';
}

export function webpack(appConfig: AppConfig) {
  return {
    module: {
      rules: [
        {
          test: /\.twig$/,
          use: [
            {
              loader: 'twing-loader',
              options: {
                environmentModulePath: require.resolve('./environment'),
              },
            },
          ],
        },
      ],
    },
  };
}
