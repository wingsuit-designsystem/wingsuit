import AppConfig from '../../AppConfig';

export function name(appConfig: AppConfig) {
  return 'babel';
}

export function webpack(appConfig: AppConfig) {
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
          test: /\.js$/,
          // @babel runtime and core must NOT be transformed by babel
          exclude: /@babel(?:\/|\\{1,2})runtime|core-js|highlight\.js/,
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
