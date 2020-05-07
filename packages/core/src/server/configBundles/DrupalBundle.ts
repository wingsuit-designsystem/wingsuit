import path from "path";
import {BaseConfigBundle} from "../BaseConfigBundle";
import BaseApp from "../../common/BaseApp";

export default class DrupalBundle extends BaseConfigBundle {
  public static create(app: BaseApp) {
    return new DrupalBundle('drupal', app);
  }

  protected sharedWebpackConfig:{} = {
    entry: {
      app: [path.resolve(this.appConfig.path, 'index.js')],
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
            outputPath: this.designSystemConfig.assetAtomicFolder,
            context: path.join(this.appConfig.path, this.appConfig.designSystem),
            emit: true,
          },
        },
      ],
    },
  }

  protected developmentWebpackConfig: {} = {
    stats: {
      children: false,
      entrypoints: false,
      chunks: true,
    },
  }

  protected productionWebpackConfig: {} = {
    stats: {
      children: false,
      entrypoints: false,
      chunks: true,
    },
  };
}