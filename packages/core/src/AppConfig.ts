export default interface AppConfig {
  type: string;

  name: string;

  path: string;

  distFolder: string;

  environment: string;

  namespaces: Namespace;

  cssMode: string;

  patternFolder: string;

  assetBundleFolder: string;

  assetAtomicFolder: string;

  absDesignSystemPath: string;

  absRootPath: string;

  absAppPath: string;

  absDistFolder: string;

  absPatternPath: string;

  features: Feature;

  webpack(appConfig: AppConfig, config?: any);

  webpackFinal(appConfig: AppConfig, config?: any);

  getParameters(name: string);

  presets: [];
}

export interface Preset {
  defaultConfig(appConfig: AppConfig): any;
  name(appConfig: AppConfig): string;
  webpack(appConfig: AppConfig);
  webpackFinal(appConfig: AppConfig, config: any);
}
export interface PresetItem {
  [key: string]: Preset;
}

export interface Namespace {
  [key: string]: string;
}

export interface Feature {
  [key: string]: string;
}

export interface PresetDefinition {
  preset: Preset;
  name: string;
  parameters: any;
}
