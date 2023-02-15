const namespaces = require('./source/default/namespaces');

module.exports = {
  presets: [
    // '@wingsuit-designsystem/preset-tailwind2',
    '@wingsuit-designsystem/preset-pages',
    // '@wingsuit-designsystem/preset-mdx',
    // '@wingsuit-designsystem/preset-pwa',
    // '@wingsuit-designsystem/preset-imagemin',
    // '@wingsuit-designsystem/preset-compression',
  ],
  parameters: {
    pwa: {
      appName: 'Wingsuit Documentation Page',
      appDescription: 'App developed with the awesome wingsuit package',
      developerName: 'Christian Wiedemann',
    },
  },
  designSystems: {
    default: {
      namespaces,
    },
  },
};
