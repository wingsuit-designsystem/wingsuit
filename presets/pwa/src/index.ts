import { AppConfig } from '@wingsuit-designsystem/core';

// path
import * as path from 'path';

// webpack plugins
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExcludeAssetsPlugin = require('@ianwalter/exclude-assets-plugin');

/**
 * Exposing options, which can be changed in the wingsuit.config.js.
 */
interface Pwa {
  logo: string;
  prefix: string;
  publicPath: string;
  appName: string | null;
  appDescription: string | null;
  developerName: string | null;
  developerURL: string | null;
}

/**
 * Give the preset a name, so we can access it in the wingsuit.config.js.
 * @param {AppConfig} appConfig
 * @returns {string}
 */
export function name(appConfig: AppConfig) {
  return 'pwa';
}

/**
 * Setting default values.
 * @param {AppConfig} appConfig
 * @returns {Pwa}
 */
export function defaultConfig(appConfig: AppConfig): Pwa {
  return {
    logo: path.resolve(`${appConfig.absDesignSystemPath}/favicon-src.png`),
    prefix: 'images/favicons/',
    publicPath: 'images/favicons',
    appName: null,
    appDescription: null,
    developerName: null,
    developerURL: null,
  };
}

export function webpack(appConfig: AppConfig, config: Pwa) {
  if (appConfig.environment === 'production') {
    return {
      plugins: [
        new HtmlWebpackPlugin({
          inject: false,
          excludeAssets: [/\.css/],
          filename: 'webapp.html',
          templateContent: ({ htmlWebpackPlugin }) => `
          ${htmlWebpackPlugin.tags.headTags} 
        `,
        }),
        new ExcludeAssetsPlugin(),
        new FaviconsWebpackPlugin({
          logo: config.logo,
          prefix: config.prefix,
          cache: false,
          inject: true,
          favicons: {
            appName: config.appName,
            appDescription: config.appDescription,
            developerName: config.developerName,
            developerURL: config.developerURL,
            path: config.publicPath,
          },
        }),
      ],
    };
  }
  return {};
}
