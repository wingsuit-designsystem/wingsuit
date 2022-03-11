const wingsuitCore = require('@wingsuit-designsystem/core');

const wingsuitConfig = wingsuitCore.resolveConfig('storybook');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    const app = wingsuitCore.getAppPack(wingsuitConfig, [config]);
    return app;
  },
};
