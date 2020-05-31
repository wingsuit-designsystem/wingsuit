import WebpackBundleConstructor from './server/WebpackBundleConstructor';

export default interface AppConfig {
  type: string;

  name: string;

  path: string;

  distFolder: string;

  environment: string;

  namespaces: Namespace;

  cssMode: string;

  assetBundleFolder: string;

  assetAtomicFolder: string;

  absDesignSystemPath: string;

  absRootPath: string;

  absAppPath: string;

  absDistFolder: string;

  webpackBundles: [];

  webpackBundleRegistry: WebpackBundle;
}

export interface WebpackBundle {
  [key: string]: WebpackBundleConstructor;
}

export interface Namespace {
  [key: string]: string;
}
