const namespaces = require('./source/default/namespaces');

module.exports = {
  presets: ['@wingsuit-designsystem/preset-scss'],
  designSystems: {
    default: {
      namespaces,
    },
  },
};
