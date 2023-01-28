"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.array.concat.js");
var _twing = require("twing");
var _pattern = require("@wingsuit-designsystem/pattern");
var _TwingRenderer = require("./TwingRenderer");
var twingFilters = require('twing-drupal-filters');
var loader = new _twing.TwingLoaderFilesystem();
var environment = new _twing.TwingEnvironment(loader);

// In storybook we get this returned as an instance of
// TWigLoaderNull, we need to avoid processing this.
if (typeof loader.addPath === 'function') {
  var namespaces = _pattern.renderer.getNamespaces();
  Object.keys(namespaces).forEach(function (namespace) {
    loader.addPath(namespaces[namespace], namespace);
  });
}
function twigAttributeFunction() {
  var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return Promise.resolve(new _pattern.TwigAttribute(attributes));
}
function twigFileUrl(url) {
  return Promise.resolve(url.replace('ws-assets://', ''));
}
function _without(element) {
  if (!element) {
    return [];
  }
  if (element instanceof _pattern.TwigAttribute) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    args.forEach(function (key) {
      element.removeAttribute(key);
    });
  }
  return element;
}
function init() {
  twingFilters(environment);
  var filters = {
    without: function without(arg1) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      return Promise.resolve(_without.apply(void 0, [arg1].concat(args)));
    }
  };
  var functions = {
    file_url: twigFileUrl,
    pattern: _pattern.renderer.renderPattern,
    create_attribute: twigAttributeFunction,
    pattern_configuration: _pattern.renderer.getPatternConfiguration,
    pattern_preview: function pattern_preview(patternId) {
      var variables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var variantId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '__default';
      return new Promise(function (resolve) {
        _pattern.renderer.renderPatternPreview(patternId, variables, variantId).then(function (output) {
          resolve(output);
        });
      });
    }
  };
  Object.keys(functions).forEach(function (key) {
    environment.addFunction(new _twing.TwingFunction(key, functions[key], []));
  });
  Object.keys(filters).forEach(function (key) {
    environment.addFilter(new _twing.TwingFilter(key, filters[key], []));
  });
}
_pattern.renderer.setRenderer(new _TwingRenderer.TwingRenderer());
init();
module.exports = environment;