import path from 'path';
import AppConfig from '../../AppConfig';

const glob = require('glob');

export function name(appConfig: AppConfig) {
  return 'cms';
}
export function webpack(appConfig: AppConfig) {
  const indexItems = glob.sync(`${appConfig.absDesignSystemPath}/**/index.js`);
  const indexObjects = indexItems.reduce((acc, item) => {
    const filename = path.basename(path.dirname(item));
    acc[filename] = item;
    return acc;
  }, {});

  const vendorItems = glob.sync(`${appConfig.absDesignSystemPath}/**/*.vendor.js`);

  const vendorObject = vendorItems.reduce((acc, item) => {
    const filename = path.basename(item).replace('.vendor.js', '');
    acc[`vendors/${filename}`] = item;
    return acc;
  }, {});

  const behaviorItems = glob.sync(`${appConfig.absDesignSystemPath}/**/*.behavior.js`);
  const behaviorObject = behaviorItems.reduce((acc, item) => {
    const filename = path.basename(item).replace('.behavior.js', '');
    acc[`behaviors/${filename}`] = item;
    return acc;
  }, {});

  return {
    target: 'web',
    devtool: appConfig.environment === 'development' ? 'cheap-source-map' : 'source-map',
    entry: {
      ...indexObjects,
      ...vendorObject,
      ...behaviorObject,
    },
  };
}
