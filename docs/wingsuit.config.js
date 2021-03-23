const namespaces = require('./source/default/namespaces');

module.exports = {
  presets: [
    '@wingsuit-designsystem/preset-tailwind2',
    '@wingsuit-designsystem/preset-pages',
    '@wingsuit-designsystem/preset-mdx',
  ],
  designSystems: {
    default: {
      namespaces,
    },
  },
};
