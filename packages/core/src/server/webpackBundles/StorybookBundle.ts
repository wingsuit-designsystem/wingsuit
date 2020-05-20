import {BaseWebpackBundle} from "../BaseWebpackBundle";
import Svg2JsonPlugin from "../plugins/Svg2JsonPlugin";
import path from "path";


export default class StorybookBundle extends BaseWebpackBundle {

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
          path.resolve(`${this.appConfig.absAppPath}/config/silo/svgs.json`)
        ),
      ],
      stats: {
        performance: true,
        children: false,
      },
    }
}
