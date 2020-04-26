/**
 * Wingsuit webpack config.
 */
const path = require('path');
const wingsuitDs = require('@wingsuit-designsystem/ds');
const rootConfig = new wingsuitDs.RootConfig(path.join(__dirname, '../../'));
const appConfig = new wingsuitDs.AppConfig('storybook', path.resolve(__dirname));
const storybookApp = new wingsuitDs.StorybookApp(appConfig, rootConfig);
appConfig.setNamespaces(require('../../source/default/namespaces'));
const wingsuit = new wingsuitDs.Wingsuit(rootConfig);
module.exports = wingsuit.generateWebpack('development', storybookApp, {});
