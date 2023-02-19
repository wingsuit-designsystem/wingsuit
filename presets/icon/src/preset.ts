import path from 'path';
import { AppConfig } from '@wingsuit-designsystem/core';
import { IPatternDefinition } from '@wingsuit-designsystem/pattern';
import { glob } from 'glob';

interface IconScale {
  [key: string]: string;
}

interface IconPadding {
  [key: string]: IconPaddingConfiguration;
}
interface IconPaddingConfiguration {
  configuration: string;
  label: string;
}

interface IconSource {
  sourceFolder: string;
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
  return {
    scales: {
      '0.5': '0.5',
      '0.75': '0.75',
      '1': '1',
      '1.25': '1.25',
      '1.5': '1.5',
      '2': '2',
      '3': '3',
    },
    padding: {
      roomy: { label: 'Roomy', configuration: 'm-2' },
      square: { label: 'Square', configuration: 'm-4' },
    },
    sources: [
      {
        sourceFolder: 'icons',
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
      // eslint-disable-next-line no-param-reassign
      appConfig.namespaces['ws-icon'] = path.resolve(__dirname, '../patterns');
    },
    patternLoaded: (patternId, patternDefinition: IPatternDefinition) => {
      if (patternId === 'icon') {
        config.sources.forEach((source) => {
          const searchFiles = `${appConfig.absPatternPath}/**/${source.sourceFolder}/*.svg`;
          const files = glob.sync(searchFiles);
          const options: {} = {};
          files.forEach((file) => {
            const filename = path.basename(file, '.svg');
            options[filename] = `[${source.libName}] ${filename}`;
          });
          // eslint-disable-next-line no-param-reassign
          patternDefinition.settings = {};

          // eslint-disable-next-line no-param-reassign
          patternDefinition.settings.scale = {
            type: 'select',
            label: 'Scale',
            options: config.scales,
          };
          // eslint-disable-next-line no-param-reassign
          patternDefinition.settings.padding = {
            type: 'select',
            label: 'Padding',
            options: config.padding,
          };
          // eslint-disable-next-line no-param-reassign
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

export function webpackFinal(appConfig: AppConfig, config: any): {} {
  if (appConfig.type === 'storybook') {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((data) => {
      if (/svg\|ico\|jpg\|/.test(String(data.test)))
        // eslint-disable-next-line no-param-reassign
        data = {};
      return data;
    });
  }
  return config;
}
