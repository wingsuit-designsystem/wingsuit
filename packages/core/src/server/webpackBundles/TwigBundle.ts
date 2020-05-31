import { BaseWebpackBundle } from '../BaseWebpackBundle';

export default class TwigBundle extends BaseWebpackBundle {
  protected sharedWebpackConfig: {} = {
    module: {
      rules: [
        {
          test: /\.twig$/,
          use: [
            {
              loader: '@wingsuit-designsystem/twig-loader',
              options: {
                twigOptions: {
                  namespaces: this.appConfig.namespaces,
                },
              },
            },
          ],
        },
      ],
    },
  };
}
