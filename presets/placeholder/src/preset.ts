/* eslint no-param-reassign: ["error", { "props": false }] */

import { AppConfig } from '@wingsuit-designsystem/core';
import { IPatternDefinition } from '@wingsuit-designsystem/pattern';
import path from 'path';

export function name(appConfig: AppConfig) {
  return 'placeholder';
}

interface PlaceholderConfig {
  aspectRatios: {};
  generationSteps: number;
  generationStart: number;
  generationMax: number;
}

export function defaultConfig(appConfig: AppConfig): PlaceholderConfig {
  return {
    generationSteps: 200,
    generationStart: 200,
    generationMax: 2000,
    aspectRatios: {
      '1_1': { w: 1, h: 1 },
      '1_3': { w: 1, h: 3 },
      '4_3': { w: 4, h: 3 },
      '3_4': { w: 3, h: 4 },
      '8_7': { w: 8, h: 7 },
      '16_9': { w: 16, h: 9 },
      '21_6': { w: 21, h: 6 },
    },
  };
}
function generateImageStyles(aspectRatios, steps, start, end) {
  const imageConfig = {};

  Object.keys(aspectRatios).forEach((key) => {
    let current = start;
    while (current < end) {
      imageConfig[`responsive_${key}_${current}w`] = {
        label: `${key.replace('_', 'x')}: ${current}`,
        width: current,
        height: Math.floor((aspectRatios[key].h / aspectRatios[key].w) * current),
      };
      current += steps;
    }
  });

  return imageConfig;
}
export function hooks(appConfig: AppConfig, config: PlaceholderConfig) {
  return {
    appConfigAlter: () => {
      appConfig.namespaces['ws-placeholder'] = path.resolve(__dirname, '../patterns');
    },
    patternLoaded: (patternId, patternDefinition: IPatternDefinition) => {
      const { aspectRatios, generationSteps, generationStart, generationMax } = config;
      if (patternId === 'placeholder') {
        const styles = generateImageStyles(
          aspectRatios,
          generationSteps,
          generationStart,
          generationMax
        );
        const options = {};
        Object.keys(styles).forEach((key) => {
          options[key] = styles[key].label;
        });
        Object.assign(patternDefinition.settings.style.options, options);
        patternDefinition.configuration.image_config.styles = styles;
      }
    },
  };
}
