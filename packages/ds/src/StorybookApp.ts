import { DefinePlugin } from 'webpack';
import * as path from 'path';
import IApp from './IApp';
import AppConfig from './AppConfig';
// Plugins:production
import RootConfig from './RootConfig';

const wingsuitTools = require('@wingsuit-designsystem/tools');

export default class StorybookApp implements IApp {
  private appConfig: AppConfig;

  private rootConfig: RootConfig;

  constructor(appConfig: AppConfig, rootConfig: RootConfig) {
    this.appConfig = appConfig;
    this.rootConfig = rootConfig;
  }

  public getSharedWebpackConfig(): {} {
    return {
      node: {
        fs: 'empty',
      },
      entry: {
        app: [path.resolve(__dirname, 'index.js')],
      },
      resolve: {
        // JavaScript can import other components via shorthand, eg:
        //   `import thing from 'atoms/thing';`
        // Sass can import other components via shorthand:
        //   `@import ~atoms/thing/thing`
        // Note: Use the tilde (~), do not include trailing ".scss"
        alias: this.appConfig.getNamespaces(),
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
                    namespaces: this.appConfig.getNamespaces(),
                  },
                },
              },
            ],
          },
          // Non-standard assets on the dependency chain
          {
            test: /\.(yml|yaml|md)$/,
            loader: 'file-loader',
            options: {
              emitFile: false,
            },
          },
        ],
      },
      plugins: [
        new wingsuitTools.Tailwind2JsonPlugin(
          path.resolve(`${this.rootConfig.getRootPath()}/tailwind.config`),
          path.resolve(`${this.appConfig.getAppPath()}/_silo/tailwind.json`)
        ),
        new wingsuitTools.Svg2JsonPlugin(
          path.resolve(
            `${this.rootConfig.getRootPath()}/source/default/_patterns/01-atoms/svg/svg`
          ),
          path.resolve(`${this.appConfig.getAppPath()}/_silo/svgs.json`)
        ),
        new wingsuitTools.Pattern2JsonPlugin(
          path.resolve(`${this.rootConfig.getRootPath()}/source/default/_patterns/`),
          path.resolve(`${this.appConfig.getAppPath()}/_silo/patterns.json`)
        ),
        new DefinePlugin({
          BUILD_TARGET: JSON.stringify(this.appConfig.getAppName()),
        }),
      ],

      stats: {
        children: false,
      },
    };
  }

  getDevelopmentWebpackConfig(): {} {
    return {};
  }

  getProductionWebpackConfig(): {} {
    return {};
  }

  init() {}
}
