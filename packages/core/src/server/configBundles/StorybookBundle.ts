import {DefinePlugin} from 'webpack';
import * as path from 'path';
import {BaseConfigBundle} from "../BaseConfigBundle";
import BaseApp from "../BaseApp";


export default class StorybookBundle extends BaseConfigBundle {
  public static create(app: BaseApp) {
    return new StorybookBundle('storybook', app);
  }

  protected sharedWebpackConfig:{} = {
      node: {
        fs: 'empty',
      },
      entry: {
        app: [path.resolve(this.appConfig.path, 'index.js')],
      },
      resolve: {
        alias: this.appConfig.namespaces,
      },
      module: {
        rules: [
          {
            test: /\.ya?ml$/,
            type: 'json', // Required by Webpack v4
            use: 'yaml-loader'
          },
          // Non-standard assets on the dependency chain
          {
            test: /\.(md)$/,
            loader: 'file-loader',
            options: {
              emitFile: false,
            },
          },
        ],
      },
      plugins: [
        new DefinePlugin({
          BUILD_TARGET: JSON.stringify(this.appConfig.name),
        }),
      ],
      stats: {
        children: false,
      },
    }
}
