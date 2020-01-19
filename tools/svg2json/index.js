const fs = require('fs-extra');
const path = require('path');
const jsondiff = require('jsondiffpatch');


function Svg2JsonPlugin(svgFolderPath, targetJsonFlename) {
  Object.assign(this, { targetJsonFlename});
  Object.assign(this, { svgFolderPath});
  this.plugin = { name: 'Svg2JsonPlugin' };
}

Svg2JsonPlugin.prototype.apply = function apply(compiler) {
  const emit = (compilation, callback) => {
    const filename = this.targetJsonFlename;
    const svgFolderPath = this.svgFolderPath;
    const svgs = [];
    fs.readdirSync(svgFolderPath).forEach(file => {
      svgs.push(path.basename(file, '.svg'));
    });
    const output = { svgs };
    // Plugins are null after restoring from file system.
    // Infinite loop.
    fs.readJson(filename, (readerr, existingJson) => {
      if (readerr) console.error(readerr, `Creating ${path.basename(filename)}!`);
      // Only write output if there is a difference or non-existent target file
      if (jsondiff.diff(existingJson, output)) {
        fs.outputJson(filename, output, writeerr => {
          if (writeerr) console.error(writeerr);
        });
      }
    });
    callback(null);
  };

  if (compiler.hooks) {
    compiler.hooks.emit.tapAsync(this.plugin, emit);
  } else {
    compiler.plugin('emit', emit);
  }
};

module.exports = Svg2JsonPlugin;
