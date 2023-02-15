import AppConfig from '../../AppConfig';

export function name(appConfig: AppConfig) {
  return 'storybook';
}

export function webpack(appConfig: AppConfig) {
  const resultWebpack = {
    devtool: appConfig.environment === 'development' ? 'eval' : 'source-map',
    resolve: {
      fallback: {
        fs: false,
      },
    },
    output: {
      path: appConfig.absDistFolder,
    },
    stats: {
      performance: true,
      children: false,
    },
  };
  return resultWebpack;
}
