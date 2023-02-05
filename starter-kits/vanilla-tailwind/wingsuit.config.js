const namespaces = require('./source/default/namespaces');

module.exports = {
  presets: ['@wingsuit-designsystem/preset-tailwind2'],
  designSystems: {
    default: {
      namespaces,
    },
  },
};
