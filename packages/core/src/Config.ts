import { AppInitConfig, Preset, PresetItem, Namespace } from './AppConfig';

export interface AppItem {
  [key: string]: AppInitConfig;
}
export interface AppTypeItem {
  [key: string]: AppInitConfig;
}

export interface DesignSystemItem {
  [key: string]: DesignSystem;
}

export interface DesignSystem {
  path: string;
  patternFolder: string;
  namespaces: Namespace;
}

export default interface Config {
  webpackFinal?: any;
  webpack?: any;
  parameters?: any;
  apps: AppItem;
  defaultPresets?: PresetItem;
  presets?: Preset[];
  designSystems?: DesignSystemItem;
  environments?: any;
}
