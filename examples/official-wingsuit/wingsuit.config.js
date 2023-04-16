const path = require('path');

const patterns = path.resolve(__dirname, 'source/default/patterns');
const appsPatterns = path.resolve(__dirname, 'apps/storybook/patterns');
module.exports = {
  presets: ['@wingsuit-designsystem/preset-twing', '@wingsuit-designsystem/preset-storybook'],
  designSystems: {
    default: {
      namespaces: {
        tokens: path.resolve(__dirname, 'source/default/tokens'),
        components: path.resolve(patterns, 'components'),
        pages: path.resolve(appsPatterns, 'pages'),
      },
    },
  },
};
