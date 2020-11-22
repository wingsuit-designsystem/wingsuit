const namespaces = require('./source/default/namespaces');

module.exports = {
  presets: ['@wingsuit-designsystem/tailwind'],
  designSystems: {
    default: {
      namespaces,
    },
  },
};
