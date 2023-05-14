"use strict";

require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.function.name.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultConfig = defaultConfig;
exports.name = name;
exports.webpack = webpack;
var ESLintPlugin = require('eslint-webpack-plugin');
var StylelintPlugin = require('stylelint-webpack-plugin');
function defaultConfig(appConfig) {
  return {
    styleLintConfig: {
      fix: false,
      failOnError: false
    },
    esLintConfig: {
      exclude: 'node_modules',
      errorOnUnmatchedPattern: false,
      fix: false,
      failOnError: false
    }
  };
}
function name(appConfig) {
  return 'lint';
}
function webpack(appConfig, config) {
  return {
    plugins: [new StylelintPlugin(config.styleLintConfig), new ESLintPlugin(config.esLintConfig)]
  };
}