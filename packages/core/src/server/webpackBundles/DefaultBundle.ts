import { DefinePlugin } from 'webpack';
import { BaseWebpackBundle } from '../BaseWebpackBundle';

export default class DefaultBundle extends BaseWebpackBundle {
  protected sharedWebpackConfig: {} = {
    output: {
      path: this.appConfig.absDistFolder,
    },
    resolve: {
      alias: this.appConfig.namespaces,
    },
    plugins: [
      new DefinePlugin({
        BUILD_TARGET: JSON.stringify(this.appConfig.name),
      }),
    ],
  };
}
