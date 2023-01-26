const namespaces = require('./source/default/namespaces');

module.exports = {
  presets: [
    '@wingsuit-designsystem/preset-tailwind2',
    '@wingsuit-designsystem/preset-postcss8',
    '@wingsuit-designsystem/preset-twing',
  ],
  designSystems: {
    default: {
      namespaces,
    },
  },
};
