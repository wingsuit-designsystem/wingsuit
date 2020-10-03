const fs = require('fs-extra');
const path = require('path');
const jsondiff = require('jsondiffpatch');

export default class Svg2JsonPlugin {
  private readonly svgFolderPath: string;

  private readonly targetJsonFlename: string;

  private plugin: {} = {};

  constructor(svgFolderPath, targetJsonFlename) {
    this.svgFolderPath = svgFolderPath;
    this.targetJsonFlename = targetJsonFlename;
    this.plugin = { name: 'Svg2JsonPlugin' };
  }

  public apply(compiler) {
    const beforeCompile = (compilation, callback) => {
      const filename = this.targetJsonFlename;
      const { svgFolderPath } = this;
      const svgs: string[] = [];
      fs.readdirSync(svgFolderPath).forEach((file) => {
        svgs.push(path.basename(file, '.svg'));
      });
      const output = { svgs };
      // Plugins are null after restoring from file system.
      // Infinite loop.
      fs.readJson(filename, (readerr, existingJson) => {
        // eslint-disable-next-line no-console
        if (readerr) console.error(readerr, `Creating ${path.basename(filename)}!`);
        // Only write output if there is a difference or non-existent target file
        if (jsondiff.diff(existingJson, output)) {
          fs.outputJson(filename, output, (writeerr) => {
            // eslint-disable-next-line no-console
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
