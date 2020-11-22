const namespaces = require('./source/default/namespaces');

module.exports = {
  presets: ['@wingsuit-designsystem/preset-tailwind'],
  designSystems: {
    default: {
      namespaces,
    },
  },
};
