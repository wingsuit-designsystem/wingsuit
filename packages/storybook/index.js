function webpack(config) {
  // eslint-disable-next-line global-require
  const wingsuitCore = require('@wingsuit-designsystem/core');
  const wingsuitConfig = wingsuitCore.resolveConfig('storybook');
  const final = wingsuitCore.getAppPack(wingsuitConfig, [config]);

  return final;
}

module.exports = { webpack };
