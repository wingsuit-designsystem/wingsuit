import * as path from 'path';
import AppConfig from '../../AppConfig';

const CopyPlugin = require('copy-webpack-plugin');

export function webpack(appConfig: AppConfig) {


  return {
    plugins: [
      new CopyPlugin([
        {
          from: 'videos/*',
          to: appConfig.assetBundleFolder,
        },
      ]),
    ],
    module: {
      rules: [
        {
          loader: 'file-loader',
          test: /\.(mp4)$/,
          options: {
            outputPath: path.join(appConfig.assetBundleFolder, 'videos'),
            name: '[name].[ext]',
          },
        },
      ],
    },
  };
}

export function webpackFinal(appConfig: AppConfig, config: any): {} {
  if (appConfig.type === 'storybook') {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((data) => {
      if (/svg\|ico\|jpg\|/.test(String(data.test)))
        // eslint-disable-next-line no-param-reassign
        data = {};
      return data;
    });
  }
  return config;
}
