import { syncSilo } from '@wingsuit-designsystem/core';

const resolveConfig = require('tailwindcss/resolveConfig');

export default class Tailwind2JsonPlugin {
  private readonly tailwindConfig: string;

  private readonly targetFilePath: string;

  private plugin: {} = {};

  constructor(tailwindConfig: string, targetFilePath: string) {
    this.tailwindConfig = tailwindConfig;
    this.targetFilePath = targetFilePath;
    this.plugin = { name: 'Tailwind2JsonPlugin' };
  }

  apply(compiler) {
    const beforeCompile = (compilation, callback) => {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      const tailwindConfig = require(this.tailwindConfig);
      const filename = this.targetFilePath;
      const data = { tailwind: { theme: resolveConfig(tailwindConfig).theme } };
      syncSilo(filename, data);
      callback(null);
    };

    if (compiler.hooks) {
      compiler.hooks.beforeCompile.tapAsync(this.plugin, beforeCompile);
    } else {
      compiler.plugin('beforeCompile', beforeCompile);
    }
  }
}
