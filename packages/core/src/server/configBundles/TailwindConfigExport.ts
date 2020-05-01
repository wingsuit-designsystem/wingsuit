import * as path from 'path';
// Plugins:production
import Tailwind2JsonPlugin from "../plugins/Tailwind2JsonPlugin";
import {BaseConfigBundle} from "../BaseConfigBundle";
import BaseApp from "../BaseApp";


export default class TailwindConfigExport extends BaseConfigBundle {
  public static create(app: BaseApp) {
    return new TailwindConfigExport('tailwindExport', app);
  }

  protected sharedWebpackConfig = {
    plugins: [
      new Tailwind2JsonPlugin(
        path.resolve(`${this.rootConfig.path}/tailwind.config`),
        path.resolve(`${this.appConfig.path}/_config/_silo/tailwind.json`)
      )
    ]
  }
}
