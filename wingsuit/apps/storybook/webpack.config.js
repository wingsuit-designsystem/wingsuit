/**
 * Pattern Lab-specific webpack config.
 */

// Library Imports
const path = require('path');

const {DefinePlugin} = require('webpack');
// Plugins
const Tailwind2JsonPlugin = require('@wingsuit-designsystem/tools/tailwind2json');
const Patterns2JsonPlugin = require('@wingsuit-designsystem/tools/patterns2json');
const Svg2JsonPlugin = require('@wingsuit-designsystem/tools/svg2json');

const wingsuit = require('../../wingsuit');
// Constants: environment
const {NODE_ENV, PARTICLE_PL_HOST = ''} = process.env;
// Constants: root
const {PATH_DIST} = require('../../wingsuit.root.config');
// Constants: app
const appConfig = require('./wingsuit.app.config');

// eslint-disable-next-line no-unused-vars
const {APP_NAME, APP_PATH, APP_DIST, APP_DIST_PUBLIC} = appConfig;

const shared = {
  node: {
    fs: "empty"
  },
  entry: {
    app: [path.resolve(__dirname, 'index.js')],
  },
  output: {
    path: APP_DIST,
    publicPath: APP_DIST_PUBLIC,
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')]
  },
  module: {
    rules: [
      {
        test: /\.wingsuit\.yml/,
        use: [
          {
            loader: 'pattern-loader',

          },
        ],
      },
      {
        test: /\.twig$/,
        use: [
          {
            loader: 'twing-loader',
            options: {
              environmentModulePath: require.resolve('./environment.js')
            }
          },
        ],
      },
      // Non-standard assets on the dependency chain
      {
        test: /\.(md)$/,
        loader: 'file-loader',
        options: {
          emitFile: false,
        },
      },
    ],
  },
  plugins: [
    new Tailwind2JsonPlugin(
      path.normalize(`${__dirname}/../../tailwind.config`),
      'apps/storybook/_silo/tailwind.json'
    ),
    new Svg2JsonPlugin(
      'source/default/_patterns/01-atoms/svg/svg',
      'apps/storybook/_silo/svgs.json'
    ),
    new Patterns2JsonPlugin(
      'source/default/_patterns/',
      'apps/storybook/_silo/patterns.json'
    ),
    new DefinePlugin({
      BUILD_TARGET: JSON.stringify(APP_NAME),
    }),
  ],

  stats: {
    children: false,
  },
};

const dev = {
  // All stats available here: https://webpack.js.org/configuration/stats/
  stats: {
    depth: false,
    entrypoints: false,
    chunkModules: false,
    chunkOrigins: false,
    env: true,
    colors: false,
    hash: false,
    version: true,
    timings: true,
    assets: false,
    chunks: false,
    modules: false,
    reasons: true,
    source: false,
    errors: true,
    errorDetails: true,
    warnings: true,
    publicPath: true,
  },

};

const prod = {};

module.exports = wingsuit(
  // app: webpack
  {shared, dev, prod},
  // app: config
  appConfig,
  // Options
  {
    cssMode: NODE_ENV === 'development' ? 'hot' : 'extract',
  }
);
