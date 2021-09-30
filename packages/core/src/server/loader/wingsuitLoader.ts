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
  const esModule = typeof options.esModule !== 'undefined' ? options.esModule : true;
  const res = YAML.parse(src, options);
  const info = pathInfo(this.resourcePath, appConfig);
  const result: any = {};
  if (info !== null) {
    Object.keys(res).forEach((key) => {
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
      }
    });
  }
  const json = JSON.stringify(res);
  return `import { getStorage } from '@wingsuit-designsystem/pattern'; 
  getStorage().addDefinitions(${json}); 
  ${esModule ? 'export default' : 'module.exports ='} ${json};`;
}
