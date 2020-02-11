const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const yaml = require('js-yaml');
const jsondiff = require('jsondiffpatch');

function Pattern2YamlPlugin(sourceFolder, targetFilePath) {
  Object.assign(this, { targetFilePath });
  Object.assign(this, { sourceFolder });
  this.plugin = { name: 'Pattern2YamlPlugin' };
}

Pattern2YamlPlugin.prototype.generate = function generate(callback) {
  const filePattern = `${this.sourceFolder}/**/*.wingsuit.yaml`;
  const patternsObj = { patterns: {} };
  let mergedPatters = {};
  // eslint-disable-next-line no-shadow
  glob.sync(filePattern).forEach((path) => {
    const file = fs.readFileSync(path, 'utf8');
    const parsedFiled = yaml.safeLoad(file);
    mergedPatters = Object.assign(mergedPatters, parsedFiled);
  });
  patternsObj.patterns = mergedPatters;

  fs.readJson(this.targetFilePath, (readerr, existingPatternJson) => {
    if (readerr) console.error(readerr, `Creating ${path.basename(this.targetFilePath)}!`);
    // Only write output if there is a difference or non-existent target file
    if (jsondiff.diff(existingPatternJson, patternsObj)) {
      fs.outputJson(this.targetFilePath, patternsObj, (writeerr) => {
        if (writeerr) console.error(writeerr);
        callback(null);
      });
    } else {
      callback(null);
    }
  });
};

Pattern2YamlPlugin.prototype.apply = function apply(compiler) {
  const emit = (compilation, callback) => {
    this.generate(callback);
  };

  if (compiler.hooks) {
    compiler.hooks.emit.tapAsync(this.plugin, emit);
  } else {
    compiler.plugin('emit', emit);
  }
};

module.exports = Pattern2YamlPlugin;
