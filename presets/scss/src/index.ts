import path from 'path';
import { AppConfig } from '@wingsuit-designsystem/core';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const glob = require('glob');

export function supportFeature(name, appConfig: AppConfig) {
  if (name === 'scss') {
    return true;
  }
  return false;
}

export function webpack(appConfig: AppConfig) {
  const scssItems = glob.sync(`${appConfig.absDesignSystemPath}/**/*.scss`);

  const scssEntries = scssItems.reduce((acc, item) => {
    const name = path.basename(item).replace('.scss', '');
    // Remove scss files starting with '_'
    if (name.indexOf('_') !== 0) {
      acc[`${name}`] = item;
    }
    return acc;
  }, {});

  const loader = [
    {
      loader: require.resolve('css-loader'),
      options: {
        sourceMap: true,
      },
    },
    {
      // PostCSS config at ./postcss.config.js
      loader: require.resolve('postcss-loader'),
      ...appConfig.postCssConfig,
    },
    {
      loader: require.resolve('resolve-url-loader'),
      options: {
        sourceMap: true,
        root: '',
      },
    },
    {
      loader: require.resolve('sass-loader'), // compiles Sass to CSS
    },
  ];

  /**
   * CSS modes are import to frontend dev. Wingsuit currently supports hot
   * reloading or full css file extraction.
   */
  const cssModes = {
    // 'hot' uses the style-loader plugin which rewrites CSS inline via
    // webpack-dev-server and is purely development-mode ONLY. style-loader
    // CANNOT exists alongside MiniCsExtractPlugin
    hot: {
      // Webpack for hot starts here
      module: {
        rules: [
          {
            test: /\.scss$/,
            use: [{ loader: require.resolve('style-loader') }, ...loader],
          },
        ],
      },
    },
    // 'extract' uses MiniCssExtractPlugin.loader to write out actual CSS files to
    // the filesystem. This is useful for production builds, and webpack --watch
    extract: {
      entry: {
        ...scssEntries,
      },
      // Webpack for extract starts here
      module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: { publicPath: './' },
              },
              ...loader,
            ],
          },
        ],
      },
      plugins: [
        new OptimizeCSSAssetsPlugin({
          // Ensure css map file output
          cssProcessorOptions: {
            map: {
              inline: false,
              annotation: true,
            },
          },
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: 'css/[id].css',
        }),
      ],
    },
  };
  return cssModes[appConfig.cssMode];
}
