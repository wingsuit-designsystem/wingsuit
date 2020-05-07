import {BaseConfigBundle} from "../BaseConfigBundle";
import BaseApp from "../../common/BaseApp";


export default class TwigBundle extends BaseConfigBundle {
  public static create(app: BaseApp) {
    return new TwigBundle('twig', app);
  }

  protected sharedWebpackConfig:{} = {

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
        ],
      }
    }
}
