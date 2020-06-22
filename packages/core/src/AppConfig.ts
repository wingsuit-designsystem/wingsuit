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

  webpack(appConfig: AppConfig);

  webpackFinal(appConfig: AppConfig, config: any);

  presets: [];

  presetsRegistry: PresetItem;
}

export interface Preset {
  webpack(appConfig: AppConfig);
  webpackFinal(appConfig: AppConfig, config: any);
}
export interface PresetItem {
  [key: string]: Preset;
}

export interface Namespace {
  [key: string]: string;
}
