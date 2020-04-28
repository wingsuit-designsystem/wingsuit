import {DefinePlugin} from 'webpack';
import * as path from 'path';
import BaseApp from "./BaseApp";

export default class DrupalApp extends BaseApp {
  public getSharedWebpackConfig(): {} {
    return {
      entry: {
        app: [path.resolve(this.appConfig.path, 'index.js')],
      },
      output: {
        path: path.join(this.rootConfig.path, this.rootConfig.dist, `app-${this.appConfig.type}`, this.rootConfig.assetBundleFolder),
      },
      resolve: {
        alias: this.appConfig.namespaces,
      },
      module: {
        rules: [
          {
            test: /\.(yml|md|yaml)$/,
            loader: 'file-loader',
            options: {
              emitFile: false,
            },
          },
          {
            test: /\.twig$/,
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: this.rootConfig.assetAtomicFolder,
              context: path.join(this.appConfig.path, this.appConfig.designSystem),
              emit: true,
            },
          },
        ],
      },
      plugins: [
        new DefinePlugin({
          BUILD_TARGET: JSON.stringify(this.appConfig.type),
        }),
      ],
    };
  }

  getDevelopmentWebpackConfig(): {} {
    return {
      stats: {
        children: false,
        entrypoints: false,
        chunks: true,
      },
    };
  }

  getProductionWebpackConfig(): {} {
    return {
      stats: {
        children: false,
        entrypoints: false,
        chunks: true,
      },
    };
  }
}
