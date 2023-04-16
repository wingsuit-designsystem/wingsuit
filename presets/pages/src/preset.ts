import { AppConfig, getDefaultPreset } from '@wingsuit-designsystem/core';
import path from 'path';

const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const Generator = require('yeoman-generator');

export function name(appConfig: AppConfig) {
  return 'pages';
}

export function wingsuitConfig(): any {
  return {
    parameters: {
      twing: {
        mode: 'load',
      },
    },
    apps: {
      pages: {
        type: 'pages',
        path: './apps/pages',
        cssMode: 'extract',
        distFolder: 'dist/app-pages',
        presets: [
          getDefaultPreset('assets'),
          getDefaultPreset('wingsuit'),
          getDefaultPreset('babel'),
          getDefaultPreset('css'),
          getDefaultPreset('cms'),
          getDefaultPreset('assetsVideos'),
          getDefaultPreset('svg'),
          '@wingsuit-designsystem/preset-twing',
          '@wingsuit-designsystem/preset-mdx',
        ],
        designSystem: 'default',
        assetBundleFolder: '',
        generator: (type, sourceGenerator) => {
          if (type === 'ws:app') {
            return {
              path: path.join(__dirname),
              Generator: class extends Generator {
                writing() {
                  const props = sourceGenerator.getProps();
                  const { appType } = props;
                  if (appType === 'pages') {
                    this.fs.copyTpl(
                      this.templatePath(`app-${appType}/**/*.ejs`),
                      sourceGenerator.getTargetFolder(),
                      props
                    );
                  }
                }
              },
            };
          }
          return null;
        },
      },
    },
  };
}

export function webpack(appConfig: AppConfig) {
  const entry = { pages: `${appConfig.absAppPath}/preview.js` };
  if (appConfig.type !== 'pages') {
    return {};
  }
  return {
    devServer: { inline: true },
    output: {
      libraryTarget: 'umd',
      publicPath: '',
    },
    devtool: 'eval',
    entry,
    plugins: [
      new StaticSiteGeneratorPlugin({
        entry: 'pages',
        globals: {
          window: {},
          self: {},
          MutationObserver: () => {},

          document: {
            querySelectorAll: () => {
              return [];
            },
            querySelector: () => {
              return null;
            },
            addEventListener: () => {},
          },
          Drupal: {
            behaviors: {},
          },
          navigator: {
            userAgent: [],
          },
        },
      }),
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: { baseDir: [appConfig.absDistFolder] },
      }),
    ],
  };
}
