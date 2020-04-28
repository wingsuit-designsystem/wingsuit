import {DefinePlugin} from 'webpack';
import * as path from 'path';
// Plugins:production
import BaseApp from "./BaseApp";
import Tailwind2JsonPlugin from "./plugins/Tailwind2JsonPlugin";
import Svg2JsonPlugin from "./plugins/Svg2JsonPlugin";
import Pattern2JsonPlugin from "./plugins/Pattern2JsonPlugin";

export default class StorybookApp extends BaseApp {
  public getSharedWebpackConfig(): {} {
    return {
      node: {
        fs: 'empty',
      },
      entry: {
        app: [path.resolve(this.appConfig.path, 'index.js')],
      },
      resolve: {
        alias: this.appConfig.namespaces,
      },
      module: {
        rules: [
          {
            test: /\.twig$/,
            use: [
              {
                loader: '@wingsuit-designsystem/twig-loader',
                options: {
                  twigOptions: {
                    namespaces: this.appConfig.namespaces,
                  },
                },
              },
            ],
          },
          {
            test: /\.ya?ml$/,
            type: 'json', // Required by Webpack v4
            use: 'yaml-loader'
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
      plugins: [
        new Tailwind2JsonPlugin(
          path.resolve(`${this.rootConfig.path}/tailwind.config`),
          path.resolve(`${this.appConfig.path}/_silo/tailwind.json`)
        ),
        new Svg2JsonPlugin(
          path.resolve(
            `${this.rootConfig.path}/source/default/_patterns/01-atoms/svg/svg`
          ),
          path.resolve(`${this.appConfig.path}/_silo/svgs.json`)
        ),
        new Pattern2JsonPlugin(
          path.resolve(`${this.rootConfig.path}/source/default/_patterns/`),
          path.resolve(`${this.appConfig.path}/_silo/patterns.json`)
        ),
        new DefinePlugin({
          BUILD_TARGET: JSON.stringify(this.appConfig.name),
        }),
      ],
      stats: {
        children: false,
      },
    };
  }
}
