const namespaces = require('./source/default/namespaces');

module.exports = {
  presets: [
    '@wingsuit-designsystem/preset-tailwind2',
    '@wingsuit-designsystem/preset-pages',
    '@wingsuit-designsystem/preset-mdx',
    '@wingsuit-designsystem/preset-postcss8',
  ],
  designSystems: {
    default: {
      namespaces,
    },
  },
  apps: {
    fff: {
      type: 'pages',
      path: 'apps/fff',
    },
    bbb: {
      type: 'pages',
      path: 'apps/bbb',
    },
  },
};
