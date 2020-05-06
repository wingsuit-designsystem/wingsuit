import {BaseConfigBundle} from "../BaseConfigBundle";
import BaseApp from "../BaseApp";
import Svg2JsonPlugin from "../plugins/Svg2JsonPlugin";
import path from "path";


export default class StorybookBundle extends BaseConfigBundle {
  public static create(app: BaseApp) {
    return new StorybookBundle('storybook', app);
  }

  protected sharedWebpackConfig:{} = {
      node: {
        fs: 'empty',
      },
      module: {
        rules: [
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
        new Svg2JsonPlugin(
          path.resolve(
            this.appConfig.namespaces.atoms, 'svg/svg'
          ),
          path.resolve(`${this.appConfig.path}/_config/_silo/svgs.json`)
        ),
      ],
      stats: {
        performance: true,
        children: false,
      },
    }
}
