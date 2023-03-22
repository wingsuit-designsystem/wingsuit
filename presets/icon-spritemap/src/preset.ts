import { IPatternDefinition } from '@wingsuit-designsystem/pattern';
import { AppConfig } from '@wingsuit-designsystem/core';
import { IconConfig } from '@wingsuit-designsystem/preset-icon';
import path from 'path';

const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

export function name(appConfig: AppConfig) {
  return 'icon-spritemap';
}
export function configKey(appConfig: AppConfig) {
  return 'icon';
}

export function webpack(appConfig: AppConfig, config: IconConfig) {
  const resultWebpack: any = {
    plugins: [],
    module: {
      rules: [],
    },
  };

  const testPatterns: string[] = [];
  config.sources.forEach((svgConfig) => {
    testPatterns.push(`.*[/|\\\\]${svgConfig.sourceFolder}[/|\\\\].*.svg$`);
  });

  const rule = new RegExp(testPatterns.join('|'));
  resultWebpack.module.rules.push({
    test: rule,
    use: [
      {
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          outputPath: `${appConfig.assetsDistFolder}/`,
          spriteFilename: (sourceFileName) => {
            let targetFileName = 'images/spritemap.svg';
            config.sources.forEach((svgConfig) => {
              if (sourceFileName.includes(`/${svgConfig.sourceFolder}/`)) {
                targetFileName = svgConfig.spriteFilename;
              }
            });
            return targetFileName;
          },
        },
      },
      'svg-transform-loader',
      {
        loader: 'svgo-loader',
        options: {
          plugins: [
            { name: 'removeTitle' },
            { name: 'removeEditorsNSData' },
            { name: 'convertColors', params: { shorthex: false } },
            { name: 'convertPathData' },
          ],
        },
      },
    ],
  });
  resultWebpack.plugins.push(
    new SpriteLoaderPlugin({
      plainSprite: true,
    })
  );
  return resultWebpack;
}

export function hooks(appConfig: AppConfig, config: IconConfig) {
  return {
    patternLoaded: (patternId, patternDefinition: IPatternDefinition) => {
      if (patternId === 'icon') {
        // eslint-disable-next-line no-param-reassign
        patternDefinition.variants = {};
        // eslint-disable-next-line no-param-reassign
        patternDefinition.variants.spritemap = {
          use: '@ws-icon-spritemap/spritemap.twig',
          label: 'Spritemap',
        };
      }
    },
    appConfigAlter: () => {
      // eslint-disable-next-line no-param-reassign
      appConfig.namespaces['ws-icon-spritemap'] = path.resolve(__dirname, '../patterns');
    },
  };
}
