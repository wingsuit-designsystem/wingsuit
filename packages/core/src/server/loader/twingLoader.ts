import { getOptions } from 'loader-utils';
import { validate } from 'schema-utils';
import { pathInfo } from '../../index';
import FileDependencyPlugin from '../plugins/FileDependencyPlugin';

const schema = {};

export default function twingLoader(this: any, source) {
  const options = getOptions(this);
  const { appConfig } = options;

  validate(schema, options, {
    name: 'Twing Loader',
    baseDataPath: 'options',
  });

  const json = JSON.stringify(source)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
  const esModule = typeof options.esModule !== 'undefined' ? options.esModule : true;

  const info = pathInfo(this.resourcePath, appConfig);
  let importScript = '';
  if (info !== null) {
    const isAdded = FileDependencyPlugin.addFile(
      `${info.namespace}/${info.path}`,
      this.resourcePath,
      `${appConfig.assetBundleFolder}/${info.namespace}/${info.path}`,
      source
    );
    if (isAdded === true) {
      importScript = `import { getStorage } from '@wingsuit-designsystem/pattern';
    getStorage().addTwig('@${info.namespace}/${info.path}', {default: ${json}});`;
    }
  }

  return `${importScript} ${esModule ? 'export default' : 'module.exports ='} ${json};`;
}
