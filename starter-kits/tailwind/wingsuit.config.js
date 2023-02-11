const path = require('path');

const patterns = path.resolve(__dirname, 'source/default/patterns');
console.log(patterns);
module.exports = {
  presets: [
    '@wingsuit-designsystem/preset-tailwind2',
    '@wingsuit-designsystem/preset-twing',
    '@wingsuit-designsystem/preset-placeholder',
    '@wingsuit-designsystem/preset-icon',
    '@wingsuit-designsystem/preset-icon-spritemap',
  ],
  designSystems: {
    default: {
      namespaces: {
        tokens: path.resolve(__dirname, 'source/default/tokens'),
        protons: path.resolve(patterns, '00-protons'),
        atoms: path.resolve(patterns, '01-atoms'),
        molecules: path.resolve(patterns, '02-molecules'),
        organisms: path.resolve(patterns, '03-organisms'),
        templates: path.resolve(patterns, '04-templates'),
        pages: path.resolve(patterns, '05-pages'),
      },
    },
  },
};
