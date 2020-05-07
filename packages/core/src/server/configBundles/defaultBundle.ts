import path from "path";
import {BaseConfigBundle} from "../BaseConfigBundle";
import BaseApp from "../../common/BaseApp";
import {DefinePlugin} from "webpack";

export default class DefaultBundle extends BaseConfigBundle {
  public static create(app: BaseApp) {
    return new DefaultBundle('default', app);
  }

  protected sharedWebpackConfig:{} = {
    output: {
      path: path.join(this.designSystemConfig.path, this.designSystemConfig.distFolder, `${this.appConfig.name}-${this.appConfig.type}`, this.designSystemConfig.assetBundleFolder),
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