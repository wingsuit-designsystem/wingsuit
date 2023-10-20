const namespaces = require('./source/default/namespaces');
const {getDefaultPreset} = require("@wingsuit-designsystem/core");

module.exports = {
  parameters: {
    twing: {
      mode: 'load'
    }
  },
  apps: {
    nextjs: {
      type: 'nextjs',
      presets: [
        getDefaultPreset('assets'),
        getDefaultPreset('assetsVideos'),
        '@wingsuit-designsystem/preset-pattern',
        '@wingsuit-designsystem/preset-twing',
        '@wingsuit-designsystem/preset-pattern',
        '@wingsuit-designsystem/preset-imagemin',],
    }
  },
  designSystems: {
    default: {
      namespaces,
    },
  },
};
