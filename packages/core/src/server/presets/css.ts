import AppConfig from '../../AppConfig';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

export function name(appConfig: AppConfig) {
  return 'css';
}

export function webpack(appConfig: AppConfig) {
  const loader = [
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    },
    {
      // PostCSS config at ./postcss.config.js
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        ident: 'postcss',
        config: {
          path: 'postcss.config.js',
        },
      },
    },
    {
      loader: 'resolve-url-loader',
      options: {
        sourceMap: true,
        root: '',
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
