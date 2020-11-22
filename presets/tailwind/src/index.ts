import * as path from 'path';
import { AppConfig } from '@wingsuit-designsystem/core';
import Tailwind2JsonPlugin from './plugins/Tailwind2JsonPlugin';

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
