import { AppConfig, getDefaultPreset } from '@wingsuit-designsystem/core';
import path from 'path';

const Generator = require('yeoman-generator');

const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

export function name(appConfig: AppConfig) {
  return 'pages';
}

export function wingsuitConfig(): {} {
  return {
    apps: {
      pages: {
        type: 'pages',
        path: './apps/pages',
        cssMode: 'extract',
        distFolder: 'dist/app-pages',
        presets: [getDefaultPreset('twing'), getDefaultPreset('storybook')],
        designSystem: 'default',
        assetBundleFolder: '',
        generator: (appConfig: AppConfig, type, sourceGenerator) => {
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
                      sourceGenerator.getTaretFolder(),
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
  if (appConfig.type !== 'pages') {
    return {};
  }
  return {
    devServer: { inline: true },
    output: {
      libraryTarget: 'umd',
    },
    entry: {
      pages: path.join(appConfig.absAppPath, 'preview.js'),
    },
    module: {
      rules: [
        {
          test: /\.mdx?$/,
          use: ['babel-loader', '@mdx-js/loader'],
        },
      ],
    },
    plugins: [
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: { baseDir: [appConfig.absDistFolder] },
      }),
      new StaticSiteGeneratorPlugin({
        entry: 'pages',
        globals: {
          window: {},
          self: {},
          document: {},
          Drupal: {
            behaviors: {},
          },
          navigator: {
            userAgent: [],
          },
        },
      }),
    ],
  };
}
