import path from 'path';
import AppConfig from '../../AppConfig';

const glob = require('glob');

export function name(appConfig: AppConfig) {
  return 'cms';
}
export function webpack(appConfig: AppConfig) {
  const assets = appConfig.assets ?? [];
  let entries = {};
  assets.forEach((asset) => {
    const indexItems = glob.sync(`${appConfig.absDesignSystemPath}/${asset.glob}`);
    entries = {
      ...entries,
      ...indexItems.reduce((acc, item) => {
        const filename = path.basename(item).replace(asset.replace, '');
        acc[asset.folder + filename] = item;
        return acc;
      }, {}),
    };
  });

  return {
    target: 'web',
    devtool: appConfig.environment === 'development' ? 'cheap-source-map' : 'source-map',
    entry: entries,
  };
}
