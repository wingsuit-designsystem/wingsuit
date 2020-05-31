const namespaces = require('./source/default/namespaces');
const CustomBundle = require('./.wingsuit/webpackBundle/CustomBundle');

module.exports = {
  extend: {
    apps: {
      storybook: {
        webpackBundles:[
          "CustomBundle"
        ]
      }
    }
  },
  webpackBundles: {
    "CustomBundle": CustomBundle
  },
  designSystems: {
    default: {
      namespaces,
    },
  },
};
