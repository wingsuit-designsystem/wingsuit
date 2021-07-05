import AppConfig from '../../AppConfig';

export function name(appConfig: AppConfig) {
  return 'storybook';
}

export function webpack(appConfig: AppConfig) {
  const resultWebpack = {
    devtool: appConfig.environment === 'development' ? 'eval' : 'source-map',
    module: {
      rules: [
        {
          test: /\.ya?ml$/,
          type: 'json', // Required by Webpack v4
          use: 'yaml-loader',
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
    stats: {
      performance: true,
      children: false,
    },
  };
  return resultWebpack;
}
