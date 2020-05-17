export default interface AppConfig {
  type: string;

  name: string;

  path: string;

  distFolder: string;

  environment: string;

  namespaces: Namespace;

  cssMode: string;

  assetBundleFolder:string;

  assetAtomicFolder:string;

  absDesignSystemPath: string;

  absRootPath: string;

  absAppPath: string;

  absDistFolder: string;

  webpackBundles: [];
}

export interface Namespace {
  [key: string]: string;
}