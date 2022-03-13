import AppConfig from '../../AppConfig';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

export function name(appConfig: AppConfig) {
  return 'css';
}

interface CssConfig {
  cssLoaderConfig: any;
}

export function defaultConfig(appConfig: AppConfig): CssConfig {
  return {
    cssLoaderConfig: {
      options: {
        sourceMap: true,
        importLoaders: 1,
      },
    },
  };
}

export function webpack(appConfig: AppConfig, config: CssConfig) {
  const loader = [
    {
      loader: require.resolve('css-loader'),
      ...config.cssLoaderConfig,
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
      },
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
            test: /\.css$/,
            use: [{ loader: 'style-loader' }, ...loader],
          },
        ],
      },
    },
    // 'extract' uses MiniCssExtractPlugin.loader to write out actual CSS files to
    // the filesystem. This is useful for production builds, and webpack --watch
    extract: {
      // Webpack for extract starts here
      module: {
        rules: [
          {
            test: /\.css$/,
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
      plugins: [],
      optimization: {},
    },
  };
  if (appConfig.environment === 'production') {
    cssModes.extract.optimization = {
      minimizer: [new CssMinimizerPlugin()],
    };
  }

  cssModes.extract.plugins.push(
    // @ts-ignore
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: 'css/[id].css',
    })
  );
  return cssModes[appConfig.cssMode];
}
