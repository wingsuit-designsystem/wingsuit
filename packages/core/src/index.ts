import Server from "./server/Server";
import CssBundle from "./server/configBundles/CssBundle";
import TailwindBundle from "./server/configBundles/TailwindBundle";
import SvgBundle from "./server/configBundles/SvgBundle";
import StorybookBundle from "./server/configBundles/StorybookBundle";
import DrupalBundle from "./server/configBundles/DrupalBundle";
import TailwindConfigExport from "./server/configBundles/TailwindConfigExport";

export { default as Server } from './server/Server';
export { default as AppConfig } from './server/AppConfig';
export { default as RootConfig } from './server/RootConfig';

const server = new Server();


export function getAppPack(environment:string, module: NodeModule, options: {} = {}) {
  const app = server.getApp(module);
  server.addConfigBundle(TailwindBundle.create(app));


  // Find a better solution here. Check decorators for this use case.
  if (app.getAppConfig().type === 'storybook') {
    server.addConfigBundle(TailwindConfigExport.create(app));
    server.addConfigBundle(StorybookBundle.create(app));
  }
  if (app.getAppConfig().type === 'drupal') {
    server.addConfigBundle(DrupalBundle.create(app));
  }
  server.addConfigBundle(CssBundle.create(app));
  server.addConfigBundle(SvgBundle.create(app));
  return server.generateWebpack(environment, module);
}