import { AppConfig, getDefaultPreset } from '@wingsuit-designsystem/core';
import path from 'path';

const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

export function name(appConfig: AppConfig) {
  return 'ssg';
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
