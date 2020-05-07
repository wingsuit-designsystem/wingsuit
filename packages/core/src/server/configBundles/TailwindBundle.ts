import {BaseConfigBundle} from "../BaseConfigBundle";
import BaseApp from "../../common/BaseApp";


export default class TailwindBundle extends BaseConfigBundle {
  public static create(app: BaseApp) {
    return new TailwindBundle('tailwind', app);
  }

  protected sharedWebpackConfig = {
    module: {
      rules: [
        {
          test: /\.(js)$/,
          enforce: 'pre',
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            emitWarning: true,
          },
        },
        {
          test: /\.js$/,
          // @babel runtime and core must NOT be transformed by babel
          exclude: /@babel(?:\/|\\{1,2})runtime|core-js/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]?[hash]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]?[hash]',
              },
            },
          ],
        },
      ],
    }
  }
}
