import path from 'path';
import { AppConfig } from '@wingsuit-designsystem/core';
import { IPatternDefinition } from '@wingsuit-designsystem/pattern';
import { glob } from 'glob';

interface IconScaleConfiguration {
  label: string;
  default?: boolean;
}
interface IconScale {
  [key: string]: IconScaleConfiguration;
}

interface IconPadding {
  [key: string]: IconPaddingConfiguration;
}
interface IconPaddingConfiguration {
  configuration: string;
  label: string;
  default?: boolean;
}

interface IconSource {
  glob: string;
  spriteFilename: string;
  libName: string;
  libKey: string;
}

export interface IconConfig {
  sources: IconSource[];
  scales: IconScale;

  padding: IconPadding;
}

export function name(appConfig: AppConfig) {
  return 'icon';
}

export function defaultConfig(appConfig: AppConfig): IconConfig {
  const absDesignSystemPath = appConfig.absDesignSystemPath ?? '';
  return {
    scales: {
      '0.5': { label: '0.5' },
      '0.75': { label: '0.5' },
      '1': { label: '1.0', default: true },
      '1.25': { label: '1.25' },
      '1.5': { label: '1.5' },
      '2': { label: '2.0' },
      '3': { label: '3.0' },
    },
    padding: {
      roomy: { label: 'Roomy', configuration: 'm-2', default: true },
      square: { label: 'Square', configuration: 'm-4' },
    },
    sources: [
      {
        glob: path.join(absDesignSystemPath, '**/icons/**/*.svg'),
        libName: 'Icons',
        libKey: 'icons',
        spriteFilename: 'images/spritemap.svg',
      },
    ],
  };
}

export function hooks(appConfig: AppConfig, config: IconConfig) {
  return {
    appConfigAlter: () => {
      appConfig.namespaces['ws-icon'] = path.resolve(__dirname, '../patterns');
    },
    patternLoaded: (patternId: string, patternDefinition: IPatternDefinition) => {
      if (patternId === 'icon') {
        config.sources.forEach((source) => {
          const files = glob.sync(source.glob);
          const options: any = {};
          files.forEach((file) => {
            const filename = path.basename(file, '.svg');
            options[filename] = `[${source.libName}] ${filename}`;
          });
          patternDefinition.settings = {};
          patternDefinition.settings.scale = {
            type: 'select',
            label: 'Scale',
            default_value:
              Object.keys(config.scales).filter((key) => {
                return config.scales[key].default;
              })[0] ?? null,
            options: config.scales,
          };
          patternDefinition.settings.padding = {
            type: 'select',
            label: 'Padding',
            default_value:
              Object.keys(config.padding).filter((key) => {
                return config.padding[key].default;
              })[0] ?? null,
            options: config.padding,
          };
          patternDefinition.settings.icon = {
            label: 'Icon',
            type: 'select',
            options,
          };
        });
      }
    },
  };
}

export function webpackFinal(appConfig: AppConfig, config: any) {
  if (appConfig.type === 'storybook') {
    config.module.rules = config.module.rules.map((data) => {
      if (/svg\|ico\|jpg\|/.test(String(data.test))) data = {};
      return data;
    });
  }
  return config;
}
