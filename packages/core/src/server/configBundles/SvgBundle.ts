import * as path from 'path';
import Svg2JsonPlugin from "../plugins/Svg2JsonPlugin";
import {BaseConfigBundle} from "../BaseConfigBundle";
import BaseApp from "../BaseApp";

const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');


export default class SvgBundle extends BaseConfigBundle {
  public static create(app: BaseApp) {

    return new SvgBundle('svg', app);
  }

  protected sharedWebpackConfig = {
    entry: {
      svgSprite: path.resolve(this.rootConfig.path, 'svgSprite.js')
    },
    module: {
      rules:[
        {
          test: /.*\.svg$/,
          loader: 'svg-sprite-loader',
          options: {
            extract: true,
            spriteFilename: 'icons.svg',
          },
        }
      ]
    },
    plugins: [
      new SpriteLoaderPlugin({
        plainSprite: true
      }),
      new Svg2JsonPlugin(
        path.resolve(
          this.appConfig.namespaces.atoms, 'svg/svg'
        ),
        path.resolve(`${this.appConfig.path}/_config/_silo/svgs.json`)
      ),
    ]
  }
}
