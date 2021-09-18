import { getOptions } from 'loader-utils';
import { validate } from 'schema-utils';

const schema = {};

export default function rawLoader(source) {
  const options = getOptions(this);
  const { namespaces } = options;
  validate(schema, options, {
    name: 'Twing Loader',
    baseDataPath: 'options',
  });

  const json = JSON.stringify(source)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
  const esModule = typeof options.esModule !== 'undefined' ? options.esModule : true;

  let namespace = '';
  let path = '';
  let found = false;
  Object.keys(namespaces).forEach((key) => {
    if (
      found === false &&
      this.resourcePath.substr(0, namespaces[key].length) === namespaces[key]
    ) {
      namespace = key;
      path = this.resourcePath.substr(namespaces[key].length + 1);
      found = true;
    }
  });

  return `window.wingsuitStorage.addTwig('@${namespace}/${path}', {default: ${json}}); ;
  ${esModule ? 'export default' : 'module.exports ='} ${json};`;
}
