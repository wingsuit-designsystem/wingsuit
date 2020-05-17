import {BaseWebpackBundle} from "../BaseWebpackBundle";


export default class TwingBundle extends BaseWebpackBundle {
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
