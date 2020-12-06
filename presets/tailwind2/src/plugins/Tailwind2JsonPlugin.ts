const fs = require('fs-extra');
const path = require('path');
const jsondiff = require('jsondiffpatch');
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
      const output = { tailwind: { theme: resolveConfig(tailwindConfig).theme } };
      // Plugins are null after restoring from file system.
      // Infinite loop.
      fs.readJson(filename, (readerr, existingJson) => {
        if (readerr) console.error(readerr, `Creating ${path.basename(filename)}!`);
        // Only write output if there is a difference or non-existent target file
        if (jsondiff.diff(existingJson, output)) {
          fs.outputJson(filename, output, (writeerr) => {
            if (writeerr) console.error(writeerr);
          });
        }
      });
      callback(null);
    };

    if (compiler.hooks) {
      compiler.hooks.beforeCompile.tapAsync(this.plugin, beforeCompile);
    } else {
      compiler.plugin('beforeCompile', beforeCompile);
    }
  }
}
