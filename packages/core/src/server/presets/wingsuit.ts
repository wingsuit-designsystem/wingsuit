import path from 'path';
import AppConfig from '../../AppConfig';
import FileDependencyPlugin from '../plugins/FileDependencyPlugin';

export function name(appConfig: AppConfig) {
  return 'wingsuit';
}

export function webpack(appConfig: AppConfig) {
  const fileDependencyPlugin = new FileDependencyPlugin(appConfig.absDistFolder);
  return {
    resolveLoader: {
      alias: {
        'wingsuit-loader': path.join(__dirname, '../loader/wingsuitLoader'),
        'wingsuit-stories-loader': path.join(__dirname, '../loader/wingsuitStoriesLoader'),
      },
    },
    plugins: [fileDependencyPlugin],
    module: {
      rules: [
        {
          test: /\.wingsuit\.ya?ml$/,
          loader: 'wingsuit-loader',
          options: {
            appConfig,
            fileDependencyPlugin,
          },
        },
        {
          test: /\.stories\.jsx/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              },
            },
            {
              loader: 'wingsuit-stories-loader',
              options: {
                appConfig,
              },
            },
          ],
        },
      ],
    },
  };
}
