import path from 'path';
import { BaseWebpackBundle } from '../BaseWebpackBundle';

const glob = require('glob');

export default class DrupalBundle extends BaseWebpackBundle {
  private behaviorItems = glob.sync(`${this.appConfig.absDesignSystemPath}/**/*.behavior.js`);

  private behaviorObject = this.behaviorItems.reduce((acc, item) => {
    const name = path.basename(item).replace('.behavior.js', '');
    acc[`behaviors/${name}`] = item;
    return acc;
  }, {});

  private vendorItems = glob.sync(`${this.appConfig.absDesignSystemPath}/**/*.vendor.js`);

  private vendorObject = this.vendorItems.reduce((acc, item) => {
    const name = path.basename(item).replace('.vendor.js', '');
    acc[`vendors/${name}`] = item;
    return acc;
  }, {});

  private cssItems = glob.sync(`${this.appConfig.absDesignSystemPath}/**/*.css`);

  private cssObject = this.cssItems.reduce((acc, item) => {
    const name = path.basename(item).replace('.css', '');
    acc[`css/${name}`] = item;
    return acc;
  }, {});

  protected sharedWebpackConfig: {} = {
    target: 'web',
    entry: {
      ...this.behaviorObject,
      ...this.cssObject,
      ...this.vendorObject,
    },
    module: {
      rules: [
        {
          test: /\.(yml|md|yaml)$/,
          loader: 'file-loader',
          options: {
            emitFile: false,
          },
        },
        {
          test: /\.twig$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: this.appConfig.assetAtomicFolder,
            context: this.appConfig.absDesignSystemPath,
            emit: true,
          },
        },
      ],
    },
  };
}
