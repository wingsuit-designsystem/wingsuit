/**
 * Global namespaces
 */

const path = require('path');

const patterns = path.resolve(__dirname, 'patterns');

module.exports = {
  tokens: path.resolve(__dirname, 'tokens'),
  protons: path.resolve(patterns, '00-protons'),
  atoms: path.resolve(patterns, '01-atoms'),
  molecules: path.resolve(patterns, '02-molecules'),
  organisms: path.resolve(patterns, '03-organisms'),
  templates: path.resolve(patterns, '04-templates'),
  pages: path.resolve(patterns, '05-pages'),
  wsplaceholder: path.resolve(
    require.resolve('@wingsuit-designsystem/preset-placeholder'),
    '../../patterns'
  ),
};
