import Server from "./server/Server";
import CssBundle from "./server/webpackBundles/CssBundle";
import TailwindBundle from "./server/webpackBundles/TailwindBundle";
import AssetBundle from "./server/webpackBundles/AssetBundle";
import StorybookBundle from "./server/webpackBundles/StorybookBundle";
import DrupalBundle from "./server/webpackBundles/DrupalBundle";
import TwingBundle from "./server/webpackBundles/TwingBundle";
import TwigBundle from "./server/webpackBundles/TwigBundle";
import DefaultBundle from "./server/webpackBundles/DefaultBundle";
import AppConfig from "./AppConfig";
import WebpackBundleConstructor from "./server/WebpackBundleConstructor";

export {resolveConfig} from './resolveConfig';

export {default as Server} from './server/Server';

const server = new Server();

const merge = require('merge-deep');

const configStub = require('./stubs/defaultWingsuitConfig.stub');

server.addWebpackBundle("DefaultBundle", DefaultBundle);
server.addWebpackBundle("AssetBundle", AssetBundle);
server.addWebpackBundle("TailwindBundle", TailwindBundle);
server.addWebpackBundle("TwingBundle", TwingBundle);
server.addWebpackBundle("StorybookBundle", StorybookBundle);
server.addWebpackBundle("TwigBundle", TwigBundle);
server.addWebpackBundle("DrupalBundle", DrupalBundle);
server.addWebpackBundle("CssBundle", CssBundle);

export function addAppPack(name, bundleClass: WebpackBundleConstructor) {
  server.addWebpackBundle(name, bundleClass);
}
export function getAppPack(appConfig: AppConfig, webpacks: [] = []) {
  return server.generateWebpack(appConfig, webpacks);
}

export function getAppNames (wingsuitConfig: any = null) {
  const projectConfig = wingsuitConfig != null ? wingsuitConfig : require(`${process.cwd()}/wingsuit.config`);
  const mergedConfig = merge(configStub.wingsuit, projectConfig);
  return Object.keys(mergedConfig.apps);
}