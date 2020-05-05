import path from "path";
import {BaseConfigBundle} from "../BaseConfigBundle";
import BaseApp from "../BaseApp";
import {DefinePlugin} from "webpack";

export default class DefaultBundle extends BaseConfigBundle {
  public static create(app: BaseApp) {
    return new DefaultBundle('drupal', app);
  }

  protected sharedWebpackConfig:{} = {
    output: {
      path: path.join(this.rootConfig.path, this.rootConfig.distFolder, `${this.appConfig.name}-${this.appConfig.type}`, this.rootConfig.assetBundleFolder),
    },
    resolve: {
      alias: this.appConfig.namespaces,
    },
    plugins: [
      new DefinePlugin({
        BUILD_TARGET: JSON.stringify(this.appConfig.name),
      }),
    ],

  }


}