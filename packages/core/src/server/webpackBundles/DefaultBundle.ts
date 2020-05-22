import path from "path";
import {BaseWebpackBundle} from "../BaseWebpackBundle";
import {DefinePlugin} from "webpack";

export default class DefaultBundle extends BaseWebpackBundle {
  protected sharedWebpackConfig:{} = {
    output: {
      path: path.join(this.appConfig.absDistFolder, this.appConfig.assetBundleFolder),
    },
    resolve: {
      alias: this.appConfig.namespaces,
    },
    plugins: [
      new DefinePlugin({
        BUILD_TARGET: JSON.stringify(this.appConfig.name),
      }),
    ]
  }
}