import path from 'path';
import Svg2JsonPlugin from '../plugins/Svg2JsonPlugin';
import AppConfig from '../../AppConfig';

export function webpack(appConfig: AppConfig) {
  const resultWebpack = {
    node: {
      fs: 'empty',
    },
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
  if (appConfig.namespaces.atoms != null) {
    // @ts-ignore
    resultWebpack.plugins = [
      new Svg2JsonPlugin(
        path.resolve(appConfig.namespaces.atoms, 'svg/svg/icons'),
        path.resolve(`${appConfig.absAppPath}/config/silo/svgs.json`)
      ),
    ];
  }
  return resultWebpack;
}
