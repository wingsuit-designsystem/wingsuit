import AppConfig from '../../AppConfig';

export function name(appConfig: AppConfig) {
  return 'storybook';
}

export function webpack(appConfig: AppConfig) {
  const resultWebpack = {
    devtool: appConfig.environment === 'development' ? 'eval' : 'source-map',
    node: {
      fs: 'empty',
    },
    module: {
      rules: [
        {
          test: /\.ya?ml$/,
          exclude: /\.wingsuit\.ya?ml$/,
          type: 'json', // Required by Webpack v4
          use: 'yaml-loader',
        },
        {
          test: /\.(md)$/,
          loader: 'file-loader',
          options: {
            emitFile: false,
          },
        },
      ],
    },
    stats: {
      performance: true,
      children: false,
    },
  };
  return resultWebpack;
}
