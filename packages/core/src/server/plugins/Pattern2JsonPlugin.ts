const fsExtra = require('fs-extra');
const path = require('path');
const glob = require('glob');
const yaml = require('js-yaml');
const jsondiff = require('jsondiffpatch');

import {storage, renderer} from '@wingsuit-designsystem/pattern';

export default class Pattern2JsonPlugin {

  private readonly targtFilePath: string;

  private readonly sourceFolderPath: string;

  private readonly plugin = {}

  constructor(sourceFolderPath, targtFilePath) {
    this.sourceFolderPath = sourceFolderPath;
    this.targtFilePath = targtFilePath;
    this.plugin = {name: 'Pattern2YamlPlugin'};
  }

  handleField(field) {
    const preview = field.preview != null ? field.preview : null;
    if (field.type === 'pattern' && preview != null && preview.id != null) {
      const patternId = preview.id;
      const variantId = preview.variant;
      const settings = preview.settings != null ? preview.settings : {};
      const fields = preview.fields != null ? preview.fields : {};
      let output = '';
      try {
        const variant = storage.loadVariant(patternId, variantId)
        const mergedVariables = Object.assign(variant.getVariables(), settings, fields);
        output = renderer.renderPatternPreview(patternId, variantId, mergedVariables);
      } catch (e) {
        output = `Unable to render ${patternId}--${variantId}. Message: ${e.message}`;
      }

      field.preview = output;
      field.type = 'rendered';
    }
    return field;
  }

  generate(callback) {
    const filePattern = `${this.sourceFolderPath}/**/*.wingsuit.{yml,yaml}`;
    const patternsObj = {patterns: {}};
    let mergedPatters = {};
    // eslint-disable-next-line no-shadow
    glob.sync(filePattern).forEach((path) => {
      const file = fsExtra.readFileSync(path, 'utf8');
      const parsedFiled = yaml.safeLoad(file);
      mergedPatters = Object.assign(mergedPatters, parsedFiled);
    });

    patternsObj.patterns = mergedPatters;
    storage.createDefinitions(patternsObj);

    Object.keys(patternsObj.patterns).forEach((patternId) => {
      const pattern = patternsObj.patterns[patternId];
      if (pattern.fields != null) {
        Object.keys(pattern.fields).forEach((fieldName) => {
          pattern.fields[fieldName] = this.handleField(pattern.fields[fieldName]);
        });
      }
      if (pattern.variants != null) {
        Object.keys(pattern.variants).forEach((variantId) => {
          const variant = pattern.variants[variantId];
          if (typeof variant === 'object' && variant.fields != null) {
            Object.keys(variant.fields).forEach((fieldName) => {
              variant.fields[fieldName] = this.handleField(variant.fields[fieldName]);
            });
          }
        });
      }
    });
    fsExtra.readJson(this.targtFilePath, (readerr, existingPatternJson) => {
      if (readerr) console.error(readerr, `Creating ${path.basename(this.targtFilePath)}!`);
      // Only write output if there is a difference or non-existent target file
      if (jsondiff.diff(existingPatternJson, patternsObj)) {
        fsExtra.outputJson(this.targtFilePath, patternsObj, (writeerr) => {
          if (writeerr) console.error(writeerr);
          callback(null);
        });
      } else {
        callback(null);
      }
    });
  }

  apply(compiler) {
    const emit = (compilation, callback) => {
      this.generate(callback);
    };

    if (compiler.hooks) {
      compiler.hooks.emit.tapAsync(this.plugin, emit);
    } else {
      compiler.plugin('emit', emit);
    }
  };
}