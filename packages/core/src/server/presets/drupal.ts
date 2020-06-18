import path from 'path';
import AppConfig from "../../AppConfig";

const glob = require('glob');

export function webpack(appConfig: AppConfig) {

  const behaviorItems = glob.sync(`${appConfig.absDesignSystemPath}/**/*.behavior.js`);

  const behaviorObject = behaviorItems.reduce((acc, item) => {
    const name = path.basename(item).replace('.behavior.js', '');
    acc[`behaviors/${name}`] = item;
    return acc;
  }, {});

  const vendorItems = glob.sync(`${appConfig.absDesignSystemPath}/**/*.vendor.js`);

  const vendorObject = vendorItems.reduce((acc, item) => {
    const name = path.basename(item).replace('.vendor.js', '');
    acc[`vendors/${name}`] = item;
    return acc;
  }, {});

  const cssItems = glob.sync(`${appConfig.absDesignSystemPath}/**/*.css`);

  const cssObject = cssItems.reduce((acc, item) => {
    const name = path.basename(item).replace('.css', '');
    acc[`css/${name}`] = item;
    return acc;
  }, {});

  return {
    target: 'web',
    entry: {
      ...behaviorObject,
      ...cssObject,
      ...vendorObject,
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
            outputPath: appConfig.assetAtomicFolder,
            context: appConfig.absDesignSystemPath,
            emit: true,
          },
        },
      ],
    },
  };
}
