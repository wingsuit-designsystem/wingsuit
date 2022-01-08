import { pathInfo } from '../../index';
import FileDependencyPlugin from '../plugins/FileDependencyPlugin';

const loaderUtils = require('loader-utils');
const YAML = require('yaml');

export default function wingsuitLoader(this: any, src) {
  const { ...options } = {
    prettyErrors: true,
    ...loaderUtils.getOptions(this),
  };
  const { appConfig } = options;
  const res = YAML.parse(src, options);
  const info = pathInfo(this.resourcePath, appConfig);
  const result: any = {};
  let firstPattern = '';
  const exports: string[] = [];

  if (info !== null) {
    Object.keys(res).forEach((key) => {
      if (firstPattern === '') {
        firstPattern = key;
      }

      if (res[key].namespace == null) {
        res[key].namespace = info.namespace;
      }
      const added = FileDependencyPlugin.addFile(
        key,
        this.resourcePath,
        `wingsuit/${key}.wingsuit.yml`,
        res
      );
      if (added === true) {
        result[key] = res[key];
        exports.push(`export const ${key} = getStorage().loadPattern('${key}');`);
      }
    });
  }

  exports.push(`export default getStorage().loadPattern('${firstPattern}');`);

  const json = JSON.stringify(res);
  return `import { getStorage } from '@wingsuit-designsystem/pattern'; 
  getStorage().addDefinitions(${json}); 
  ${exports.join(' ')}`;
}
