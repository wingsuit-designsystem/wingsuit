import {BaseConfigBundle} from "../BaseConfigBundle";
import BaseApp from "../../common/BaseApp";


export default class TwingBundle extends BaseConfigBundle {
  public static create(app: BaseApp) {
    return new TwingBundle('twing', app);
  }

  protected sharedWebpackConfig:{} = {
    module: {
      rules: [
        {
          test: /\.twig$/,
          use: [
            {
              loader: 'raw-loader',
            },
          ],
        },
        /*
        {
          test: /\.twig$/,
          use: [
            {
              loader: 'twing-loader',
              options: {
                environmentModulePath: require.resolve('./environment.js')
              }
            },
          ],
        },
         */
      ],
    }
  }
}
