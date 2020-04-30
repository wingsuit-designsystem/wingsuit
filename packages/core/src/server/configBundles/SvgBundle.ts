import * as path from 'path';
// Plugins:production
import Svg2JsonPlugin from "../plugins/Svg2JsonPlugin";
import {BaseConfigBundle} from "../BaseConfigBundle";
import BaseApp from "../BaseApp";


export default class SvgBundle extends BaseConfigBundle {
  public static create(app: BaseApp) {
    return new SvgBundle('svg', app.getRootConfig(), app.getAppConfig());
  }
  
  protected sharedWebpackConfig = {
      plugins: [
        new Svg2JsonPlugin(
          path.resolve(
            `${this.rootConfig.path}/source/default/_patterns/01-atoms/svg/svg`
          ),
          path.resolve(`${this.appConfig.path}/_config/_silo/svgs.json`)
        ),
      ]
    }
}
