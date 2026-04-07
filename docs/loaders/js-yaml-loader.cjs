const uneval = require('un-eval');
const { getOptions } = require('loader-utils');
const yaml = require('js-yaml');

module.exports = function jsYamlLoader(source) {
  if (this.cacheable) {
    this.cacheable();
  }

  try {
    const { iterator, ...options } = getOptions(this) || {};
    const docs = [];

    yaml.loadAll(source, (doc) => {
      docs.push(doc);
      if (typeof iterator === 'function') {
        iterator(doc);
      }
    }, options);

    return [
      `const doc = ${uneval(docs)};`,
      'module.exports = doc.length <= 1 ? doc[0] : doc;',
    ].join('\n');
  } catch (error) {
    this.emitError(error);
    return null;
  }
};
