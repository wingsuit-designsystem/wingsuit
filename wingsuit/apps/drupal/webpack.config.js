/**
 * Drupal-specific webpack config.
 */

const path = require('path');
const glob = require('glob')
const { DefinePlugin } = require('webpack');

// Plugins
const RunScriptAfterEmit = require('../../tools/webpack/run-script-after-emit');
const wingsuit = require('../../wingsuit');
// Constants: environment
const { NODE_ENV } = process.env;
// Constants: root
const { ASSETS_ATOMIC_FOLDER } = require('../../wingsuit.root.config');
// Constants: app
const appConfig = require('./wingsuit.app.config');

const { APP_NAME, APP_DESIGN_SYSTEM, APP_DIST, APP_DIST_PUBLIC } = appConfig;

const patterDirName = appConfig.APP_DESIGN_SYSTEM + '/_patterns';

const dynamicEntries = glob.sync(patterDirName + '/**/index.js').reduce((acc, path) => {
  const entry = path.replace('/index.js', '');
  if (path.indexOf('/demo/') === -1) {
    var name = entry.match(/([^\/]*)\/*$/)[1];
    acc[name] = path;
  }
  return acc;
}, {});
const shared = {
  //entry: {
  //  'drupal-jquery': [path.resolve(__dirname, 'drupal-jquery.js')],
  //  app: [path.resolve(patterDirName + '/00-protons', 'index.js')],
  //  footer: [path.resolve(patterDirName + '/03-organisms/footer', 'index.js')]
  //},
  entry: dynamicEntries,
  output: {
    path: APP_DIST,
    publicPath: APP_DIST_PUBLIC,
  },
  module: {
    rules: [
      {
        test: /\.twig$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          outputPath: ASSETS_ATOMIC_FOLDER,
          context: APP_DESIGN_SYSTEM,
          emit: true,
        },
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      BUILD_TARGET: JSON.stringify(APP_NAME),
    }),
  ],
};

const dev = {
  stats: {
    children: false,
    entrypoints: false,
  },
  plugins: [
    new RunScriptAfterEmit({
      exec: [
        // prettier-ignore
        `echo \n🚀 Webpack Drupal ${NODE_ENV} build complete!
        Edit apps/drupal/webpack.config.js to replace this line with
        'drupal cr all' now. 🚀\n`,
      ],
    }),
  ],
  externals: {
    jquery: 'jQuery',
  },
};

const prod = {
  stats: {
    children: false,
    entrypoints: false,
    chunks: false,
  },
};

module.exports = wingsuit(
  // app: webpack
  { shared, dev, prod },
  // app: config
  appConfig,
  // Use extract css
  {
    cssMode: 'extract',
  }
);
