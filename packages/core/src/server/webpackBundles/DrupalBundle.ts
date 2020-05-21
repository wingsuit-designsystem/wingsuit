import path from "path";
import {BaseWebpackBundle} from "../BaseWebpackBundle";

export default class DrupalBundle extends BaseWebpackBundle {

  protected sharedWebpackConfig:{} = {
    entry: [
      path.resolve(this.appConfig.absAppPath, 'index.js')
    ],
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
            outputPath: this.appConfig.assetAtomicFolder,
            context: this.appConfig.absDesignSystemPath,
            emit: true,
          },
        },
      ],
    },
  }
}