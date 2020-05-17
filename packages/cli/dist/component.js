"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

const yeoman = require('yeoman-environment');

const Generator = require.resolve('./generators/component');

const env = yeoman.createEnv();

function _default(options) {
  env.register(Generator, 'ws:component');
  env.run('ws:component', () => {});
}