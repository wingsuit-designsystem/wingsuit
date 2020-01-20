/**
 * Pattern Lab-specific webpack config.
 */

// Library Imports
const path = require('path');

const { DefinePlugin } = require('webpack');
// Plugins
const RunScriptOnFiletypeChange = require('../../tools/webpack/run-script-on-filetype-change');
const Tailwind2JsonPlugin = require('@wingsuit-designsystem/tools/tailwind2json');
const Svg2JsonPlugin = require('@wingsuit-designsystem/tools/svg2json');

const wingsuit = require('../../wingsuit');
// Constants: environment
const { NODE_ENV, PARTICLE_PL_HOST = '' } = process.env;
// Constants: root
const { PATH_DIST } = require('../../wingsuit.root.config');
// Constants: app
const appConfig = require('./wingsuit.app.config');

const { APP_NAME, APP_PATH, APP_DIST, APP_DIST_PUBLIC } = appConfig;

const shared = {
  entry: {
    app: [path.resolve(__dirname, 'index.js')],
  },
  output: {
    path: APP_DIST,
    publicPath: APP_DIST_PUBLIC,
  },
  module: {
    rules: [
      // Non-standard assets on the dependency chain
      {
        test: /\.(yml|md)$/,
        loader: 'file-loader',
        options: {
          emitFile: false,
        },
      },
    ],
  },
  plugins: [
    new Tailwind2JsonPlugin(path.normalize(__dirname + '/../../tailwind.config'), path.normalize('apps/node-pl/pattern-lab/_data/tailwind-variables.json')),
    new Svg2JsonPlugin('source/default/_patterns/01-atoms/svg/svg', 'apps/node-pl/pattern-lab/_data/svgs.json'),
    new DefinePlugin({
      BUILD_TARGET: JSON.stringify(APP_NAME),
    }),
  ],
  stats: {
    children: false,
  },
};

const dev = {
  devServer: {
    host: '0.0.0.0',
    port: '80',
    allowedHosts: ['.docksal', '.vm', '0.0.0.0', 'localhost'],
    // dev server starts from this folder.
    contentBase: PATH_DIST,
    // local host name for devServer
    public: PARTICLE_PL_HOST,
    // Refresh devServer when dist/ changes (Pattern Lab)
    watchContentBase: true,
    watchOptions: {
      // Ignore all folders inside dist/app-node-pl so pl rebuilds refresh.
      // Note: prevents Webpack from watching many pl files,
      ignored: /app-node-pl/,
    },
    // Open browser immediately
    open: true,
    // Open browser to the PL landing page so it's very clear where to go
    openPage: `${APP_NAME}/pl`,
    // Inject css/js into page without full refresh
    hot: true,
    // Finds default index.html files at folder root
    historyApiFallback: true,
    // Injects all the webpack dev server code right in the page
    inline: true,
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
  },
  plugins: [
    // Recompile PL on any globbed PL file (see glob.js)
    new RunScriptOnFiletypeChange({
      test: /\.(twig|yml|md|json)$/,
      exec: [`npm run pl-node`],
    }),
  ],
};

const prod = {};

module.exports = wingsuit(
  // app: webpack
  { shared, dev, prod },
  // app: config
  appConfig,
  // Options
  {
    cssMode: NODE_ENV === 'development' ? 'hot' : 'extract',
  }
);
