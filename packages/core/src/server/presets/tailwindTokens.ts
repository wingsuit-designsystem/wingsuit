import * as path from 'path';
import Tailwind2JsonPlugin from '../plugins/Tailwind2JsonPlugin';
import AppConfig from '../../AppConfig';

export function webpack(appConfig: AppConfig) {
  return {
    plugins: [
      new Tailwind2JsonPlugin(
        path.resolve(`${appConfig.absRootPath}/tailwind.config`),
        path.resolve(`${appConfig.absAppPath}/config/silo/tailwind.json`)
      ),
    ],
  };
}
