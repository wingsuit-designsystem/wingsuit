import * as path from 'path';
import AppConfig from '../../AppConfig';

const CopyPlugin = require('copy-webpack-plugin');

export function name(appConfig: AppConfig) {
  return 'assetsVideos';
}

export function webpack(appConfig: AppConfig) {
  return {
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: 'videos/*',
            to: appConfig.assetsDistFolder,
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(mp4)$/,
          type: 'asset/resource',
          generator: {
            filename: `${path.join(appConfig.assetsDistFolder, 'videos')}/[name][ext]`,
          },
        },
      ],
    },
  };
}

export function webpackFinal(appConfig: AppConfig, config: any): any {
  if (appConfig.type === 'storybook') {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((data) => {
      if (/mp4\|webm\|wav/.test(String(data.test)))
        // eslint-disable-next-line no-param-reassign
        data = {};
      return data;
    });
  }
  return config;
}
