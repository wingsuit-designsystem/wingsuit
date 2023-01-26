"use strict";

require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.function.name.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = name;
exports.webpack = webpack;
function name(appConfig) {
  return 'twing-loader';
}
function webpack(appConfig) {
  return {
    module: {
      rules: [{
        test: /\.twig$/,
        use: [{
          loader: 'twing-loader',
          options: {
            environmentModulePath: require.resolve('./environment')
          }
        }]
      }]
    }
  };
}