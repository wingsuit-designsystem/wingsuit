import AppConfig from '../../AppConfig';

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
    module: {
      rules: [
        {
          test: /\.(js)$/,
          enforce: 'pre',
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            emitWarning: true,
          },
        },
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
