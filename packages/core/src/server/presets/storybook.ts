import AppConfig from '../../AppConfig';

export function name(appConfig: AppConfig) {
  return 'storybook';
}

export function webpackFinal(appConfig: AppConfig, config: any): {} {
  if (appConfig.type === 'storybook') {
    // eslint-disable-next-line no-param-reassign
    config.plugins = config.plugins.map((plugin) => {
      if (plugin.definitions != null) {
        // eslint-disable-next-line no-param-reassign
        plugin.definitions.process = JSON.stringify('{}');
      }
      return plugin;
    });
  }
  return config;
}

export function webpack(appConfig: AppConfig) {
  const resultWebpack = {
    devtool: appConfig.environment === 'development' ? 'eval' : 'source-map',
    resolve: {
      fallback: {
        fs: false,
      },
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
