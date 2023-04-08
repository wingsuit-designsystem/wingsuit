import AppConfig from '../../AppConfig';

export function name(appConfig: AppConfig) {
  return 'storybook';
}

export function webpack(appConfig: AppConfig) {
  const resultWebpack = {
    devtool: appConfig.environment === 'development' ? 'eval' : 'source-map',
    output: {
      path: appConfig.absDistFolder,
      pathinfo: false,
    },
    optimization: {
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false,
    },
  };

  return resultWebpack;
}
