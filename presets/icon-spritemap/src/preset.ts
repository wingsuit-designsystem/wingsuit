import { IPatternDefinition } from '@wingsuit-designsystem/pattern';
import { AppConfig } from '@wingsuit-designsystem/core';
import { IconConfig } from '@wingsuit-designsystem/preset-icon';
import path from 'path';

const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

export function name(appConfig: AppConfig) {
  return 'icon-spritemap';
}

export function configKey(appConfig: AppConfig) {
  return 'icon';
}

export function webpack(appConfig: AppConfig, config: IconConfig) {
  const resultWebpack: any = {
    plugins: [],
  };

  config.sources.forEach((svgConfig) => {
    resultWebpack.plugins.push(
      new SVGSpritemapPlugin(svgConfig.glob, {
        sprite: {
          prefix: '',
        },
        output: { filename: svgConfig.spriteFilename },
      })
    );
  });

  return resultWebpack;
}

export function hooks(appConfig: AppConfig, config: IconConfig) {
  return {
    patternLoaded: (patternId, patternDefinition: IPatternDefinition) => {
      if (patternId === 'icon') {
        patternDefinition.variants = {};
        patternDefinition.variants.spritemap = {
          use: '@ws-icon-spritemap/spritemap.twig',
          label: 'Spritemap',
        };
      }
    },
    appConfigAlter: () => {
      appConfig.namespaces['ws-icon-spritemap'] = path.resolve(__dirname, '../patterns');
    },
  };
}
