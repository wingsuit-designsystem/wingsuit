const fs = require('fs-extra');
const path = require('path');
const jsondiff = require('jsondiffpatch');


function Tailwind2JsonPlugin(filename) {
  console.log('Init plugin');
  Object.assign(this, { filename});
  this.plugin = { name: 'Tailwind2JsonPlugin' };
}

Tailwind2JsonPlugin.prototype.apply = function apply(compiler) {
  const emit = (compilation, callback) => {
    const resolveConfig = require('tailwindcss/resolveConfig')
    const tailwindConfig = require('../../tailwind.config.js')
    const filename = this.filename;
    const output = {tailwind: { theme: resolveConfig(tailwindConfig).theme }};
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

module.exports = Tailwind2JsonPlugin;
