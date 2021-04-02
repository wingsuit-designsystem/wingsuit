import path from "path";

export default interface AppConfig {
  type: string;

  name: string;

  path: string;

  distFolder: string;

  environment: string;

  namespaces: Namespace;

  cssMode: string;

  patternFolder: string;

  designSystem: string;

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
  defaultAppConfig(): AppConfig;
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

export function defaultAppConfig(type, absRootPath):AppConfig {
  return {
    type,
    name: type,
    distFolder: `dist/app-${type}`,
    namespaces: {
      wsdesignsystem: path.join(absRootPath, 'source/default'),
      wspatterns: path.join(absRootPath, 'source/default/patterns')
    },
    cssMode: 'extract',
    designSystem: 'default',
    assetBundleFolder: '',
    patternFolder: 'patterns',
    assetAtomicFolder: 'atomic',
    absDesignSystemPath: path.join(absRootPath, 'source/default'),
    absDistFolder: path.join(absRootPath, `dist/app-${type}`),
    absAppPath: path.join(absRootPath, `apps/${type}`),
    absPatternPath: path.join(absRootPath, `'source/default/patterns`),
    features: {},
    absRootPath,
    environment: "development",
    path: `./apps/${type}`,
    webpack: (appConfig: AppConfig, config?: any) => {
      return {}
    },
    webpackFinal: (appConfig: AppConfig, config?: any)=> {
      return config;
    },
    getParameters: () => {
      return {}
    },
    presets: []
  }
}

