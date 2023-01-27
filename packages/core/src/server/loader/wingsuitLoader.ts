import { pathInfo } from '../../index';

const loaderUtils = require('loader-utils');
const YAML = require('yaml');

export default function wingsuitLoader(this: any, src) {
  const { ...options } = {
    prettyErrors: true,
    ...loaderUtils.getOptions(this),
  };
  const { appConfig, fileDependencyPlugin } = options;
  const res = YAML.parse(src, options);
  const info = pathInfo(this.resourcePath, appConfig);
  const exports: string[] = [];

  if (info !== null) {
    Object.keys(res).forEach((key) => {
      const pattern = res[key];
      pattern.namespace = pattern.namespace ?? info.namespace;
      const added = fileDependencyPlugin.addFile(
        key,
        this.resourcePath,
        `wingsuit/${key}.wingsuit.yml`,
        res
      );
      if (added === true) {
        const twigTemplatePath = pattern.use.replace('@', '');
        exports.push(`export const ${key} = getStorage().loadPattern('${key}');`);
        exports.push(`import ${key}Template from '${twigTemplatePath}';`);
        exports.push(`${key}.setTemplate(${key}Template);`);
        const dependencies = pattern.dependencies ?? [];
        dependencies.forEach((dependency) => {
          exports.push(`import '${dependency}';`);
          this.addDependency(dependency);
        });
        this.addDependency(twigTemplatePath);
      }
    });
  }

  const defaultPatternKey = Object.keys(res)[0];
  exports.push(`export default getStorage().loadPattern('${defaultPatternKey}');`);
  const json = JSON.stringify(res);
  return `import { getStorage } from '@wingsuit-designsystem/pattern'; 
  getStorage().addDefinitions(${json}); 
  ${exports.join(' ')}`;
}
