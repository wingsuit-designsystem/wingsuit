import Server from "./server/Server";
import CssBundle from "./server/configBundles/CssBundle";
import TailwindBundle from "./server/configBundles/TailwindBundle";
import AssetBundle from "./server/configBundles/AssetBundle";
import StorybookBundle from "./server/configBundles/StorybookBundle";
import DrupalBundle from "./server/configBundles/DrupalBundle";
import TailwindConfigExport from "./server/configBundles/TailwindConfigExport";
import TwingBundle from "./server/configBundles/TwingBundle";
import DefaultBundle from "./server/configBundles/defaultBundle";

export { default as Server } from './server/Server';
export { default as AppConfig } from './server/AppConfig';
export { default as RootConfig } from './server/RootConfig';

const server = new Server();


export function getAppPack(environment:string, module: NodeModule, webpacks: [] = [], configurationOverwrites: {} = {}) {

  const app = server.getApp(module, configurationOverwrites);
  server.addConfigBundle(DefaultBundle.create(app));
  if (app.getAppConfig().type === 'assets') {

    server.addConfigBundle(AssetBundle.create(app));
  }
  else {
    server.addConfigBundle(TailwindBundle.create(app));
    // Find a better solution here. Check decorators for this use case.
    if (app.getAppConfig().type === 'storybook') {
      server.addConfigBundle(TailwindConfigExport.create(app));
      server.addConfigBundle(TwingBundle.create(app));
      server.addConfigBundle(StorybookBundle.create(app));
    }
    if (app.getAppConfig().type === 'drupal') {
      server.addConfigBundle(DrupalBundle.create(app));

    }
    server.addConfigBundle(CssBundle.create(app));
  }

  return server.generateWebpack(environment, module, webpacks);
}