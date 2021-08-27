import path from 'path';

export default interface AppConfig extends AppInitConfig {
  absDesignSystemPath: string;

  name: string;

  absRootPath: string;

  absAppPath: string;

  absDistFolder: string;

  absPatternPath: string;

  namespaces: Namespace;

  assetAtomicFolder: string;

  componentTypes: ComponentType;

  startup();
}

export interface AppInitConfig {
  type: string;

  name?: string;

  path: string;

  distFolder: string;

  environment?: string;

  namespaces?: Namespace;

  cssMode: string;

  patternFolder?: string;

  designSystem: string;

  assetBundleFolder: string;

  dataFolder: string;

  assetAtomicFolder?: string;

  features?: Feature;

  listeners?: Event;

  componentTypes?: ComponentType;

  startup?();

  generator?(type, rootGenerator: any);

  webpack?(appConfig: AppConfig, config?: any);

  webpackFinal?(appConfig: AppConfig, config?: any);

  getParameters?(name: string);

  postCssConfig?: any;

  presets?: Preset[];

  absDesignSystemPath?: string;

  absRootPath?: string;

  absAppPath?: string;

  absDistFolder?: string;

  absPatternPath?: string;

  absDataPath?: string;
}

export interface Preset {
  defaultConfig?(appConfig: AppConfig): any;
  name?(appConfig: AppConfig): string;
  webpack?(appConfig: AppConfig);
  defaultAppConfig?(): AppConfig;
  webpackFinal?(appConfig: AppConfig, config: any);
  commands?(appConfig: AppConfig, config: any);
}

export interface ComponentType {
  [key: string]: string;
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

export interface Event {
  [key: string]: EventFunction[];
}

interface EventFunction {
  (...args): void;
}

export interface PresetDefinition {
  preset: Preset;
  name: string;
  parameters: any;
}

export function defaultAppConfig(type, absRootPath): AppConfig {
  return {
    type,
    name: type,
    distFolder: `dist/app-${type}`,
    dataFolder: 'apps/data',
    namespaces: {
      wsdesignsystem: path.join(absRootPath, 'source/default'),
      wspatterns: path.join(absRootPath, 'source/default/patterns'),
    },
    cssMode: 'extract',
    designSystem: 'default',
    assetBundleFolder: '',
    patternFolder: 'patterns',
    assetAtomicFolder: 'atomic',
    absDesignSystemPath: path.join(absRootPath, 'source/default'),
    absDistFolder: path.join(absRootPath, `dist/app-${type}`),
    absAppPath: path.join(absRootPath, `apps/${type}`),
    absDataPath: path.join(absRootPath, `apps/data`),
    absPatternPath: path.join(absRootPath, `'source/default/patterns`),
    features: {},
    absRootPath,
    environment: 'development',
    path: `./apps/${type}`,
    componentTypes: {
      wingsuit: 'Wingsuit component (UI Pattern)',
    },
    startup() {
      return `cross-env-shell NODE_ENV=${this.environment} "webpack --watch --config ${this.path}/webpack.config.js"`;
    },
    webpack(appConfig: AppConfig, config?: any) {
      return {};
    },
    webpackFinal(appConfig: AppConfig, config?: any) {
      return config;
    },
    getParameters: () => {
      return {};
    },
    presets: [],
    postCssConfig: {
      options: {
        postcssOptions: {
          plugins: [],
        },
        sourceMap: true,
      },
    },
  };
}
