import * as path from 'path';
import Tailwind2JsonPlugin from '../plugins/Tailwind2JsonPlugin';
import { BaseWebpackBundle } from '../BaseWebpackBundle';

export default class TailwindConfigExport extends BaseWebpackBundle {
  protected sharedWebpackConfig = {
    plugins: [
      new Tailwind2JsonPlugin(
        path.resolve(`${this.appConfig.absRootPath}/tailwind.config`),
        path.resolve(`${this.appConfig.absAppPath}/config/silo/tailwind.json`)
      ),
    ],
  };
}
