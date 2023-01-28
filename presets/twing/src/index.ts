import { AppConfig } from '@wingsuit-designsystem/core';
import { renderer } from '@wingsuit-designsystem/pattern';

export function name(appConfig: AppConfig) {
  return 'twing-loader';
}

export function webpack(appConfig: AppConfig) {
  renderer.setNamespaces(appConfig.namespaces);
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
