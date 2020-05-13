import Server from "./server/Server";
import CssBundle from "./server/configBundles/CssBundle";
import TailwindBundle from "./server/configBundles/TailwindBundle";
import AssetBundle from "./server/configBundles/AssetBundle";
import StorybookBundle from "./server/configBundles/StorybookBundle";
import DrupalBundle from "./server/configBundles/DrupalBundle";
// import TailwindConfigExport from "./server/configBundles/TailwindConfigExport";
import TwingBundle from "./server/configBundles/TwingBundle";
import DefaultBundle from "./server/configBundles/defaultBundle";
import DesignSystem from "./common/DesignSystem";

export {default as Server} from './server/Server';

const server = new Server();
const designSystem = new DesignSystem();

export function getApp(environment: string, module: NodeModule, configurationOverwrites: {} = {}) {
  const app = designSystem.getApp(module, configurationOverwrites);
  return app;
}
export function getAppPack(environment: string, module: NodeModule, webpacks: [] = [], configurationOverwrites: {} = {}) {

  const app = designSystem.getApp(module, configurationOverwrites);
  server.addConfigBundle(DefaultBundle.create(app));

  if (app.getAppConfig().type === 'assets') {
    server.addConfigBundle(AssetBundle.create(app));
  } else {
    server.addConfigBundle(TailwindBundle.create(app));
    // Find a better solution here. Check decorators for this use case.
    if (app.getAppConfig().type === 'storybook') {
      server.addConfigBundle(AssetBundle.create(app));
      // server.addConfigBundle(TailwindConfigExport.create(app));
      server.addConfigBundle(TwingBundle.create(app));
      server.addConfigBundle(StorybookBundle.create(app));
    }
    if (app.getAppConfig().type === 'drupal') {
      server.addConfigBundle(AssetBundle.create(app));
      server.addConfigBundle(DrupalBundle.create(app));
    }
    server.addConfigBundle(CssBundle.create(app));
  }

  return server.generateWebpack(environment, module, webpacks);
}