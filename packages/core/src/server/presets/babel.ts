import AppConfig from '../../AppConfig';

const ESLintPlugin = require('eslint-webpack-plugin');

interface BabelConfig {
  exclude: RegExp;
}

export function defaultConfig(appConfig: AppConfig): BabelConfig {
  return {
    exclude: /node_modules/,
  };
}

export function name(appConfig: AppConfig) {
  return 'babel';
}

export function webpack(appConfig: AppConfig, config: BabelConfig) {
  return {
    plugins: [new ESLintPlugin({ exclude: 'node_modules', errorOnUnmatchedPattern: false })],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          // @babel runtime and core must NOT be transformed by babel
          exclude: config.exclude,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
}
