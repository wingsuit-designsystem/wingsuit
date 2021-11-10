import path from 'path';
import Svg2JsonPlugin from '../plugins/Svg2JsonPlugin';
import AppConfig from '../../AppConfig';

const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

interface SvgSource {
  sourceFolder: string;
  jsonFile: string;
  spriteFilename: string;
}

interface SvgConfig {
  sources: SvgSource[];
}

export function name(appConfig: AppConfig) {
  return 'svg';
}

export function defaultConfig(appConfig: AppConfig): SvgConfig {
  return {
    sources: [
      {
        sourceFolder: 'icons',
        jsonFile: path.join(appConfig.absAppPath, '/config/silo/svgs.json'),
        spriteFilename: 'images/spritemap.svg',
      },
    ],
  };
}

export function webpack(appConfig: AppConfig, config: SvgConfig) {
  const resultWebpack: any = {
    plugins: [],
    module: {
      rules: [],
    },
  };
  const testPatterns: string[] = [];
  config.sources.forEach((svgConfig) => {
    resultWebpack.plugins.push(
      new Svg2JsonPlugin(svgConfig.sourceFolder, svgConfig.jsonFile, appConfig)
    );
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
          outputPath: `${appConfig.assetBundleFolder}/`,
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
            { convertFillsToCurrentColor: true },
            { removeTitle: true },
            { removeEditorsNSData: false },
            { convertColors: { shorthex: false } },
            { convertPathData: false },
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
