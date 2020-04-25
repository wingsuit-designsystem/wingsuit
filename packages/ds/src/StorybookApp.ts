import IApp from "./IApp";
import AppConfig from "./AppConfig";
import {DefinePlugin} from "webpack";
// Plugins:production
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
import * as path from 'path';
import RootConfig from "./RootConfig";
const wingsuitTools = require('@wingsuit-designsystem/tools');

export default class StorybookApp implements IApp {
  private _appConfig: AppConfig;
  private _rootConfig: RootConfig;
  constructor(appConfig:AppConfig, rootConfig: RootConfig) {
    this._appConfig = appConfig;
    this._rootConfig = rootConfig;
  }

  public getSharedWebpackConfig():{} {
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
        alias: this._appConfig.namespaces,
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
                    namespaces: this._appConfig.namespaces
                  }
                }
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
          path.resolve(`${this._rootConfig.rootPath}/tailwind.config`),
          path.resolve(`${this._appConfig.appPath}/_silo/tailwind.json`)
        ),
        new wingsuitTools.Svg2JsonPlugin(
          path.resolve(`${this._rootConfig.rootPath}/source/default/_patterns/01-atoms/svg/svg`),
          path.resolve(`${this._appConfig.appPath}/_silo/svgs.json`)
        ),
        new wingsuitTools.Pattern2JsonPlugin(
          path.resolve(`${this._rootConfig.rootPath}/source/default/_patterns/`),
          path.resolve(`${this._appConfig.appPath}/_silo/patterns.json`)
        ),
        new DefinePlugin({
          BUILD_TARGET: JSON.stringify(this._appConfig.appName),
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

  init() {
  }


}