const namespaces = require('./source/default/namespaces');

module.exports = {
  presets: [
    '@wingsuit-designsystem/preset-tailwind2',
    '@wingsuit-designsystem/preset-twing',
    '@wingsuit-designsystem/preset-placeholder',
  ],
  designSystems: {
    default: {
      namespaces,
    },
  },
};
