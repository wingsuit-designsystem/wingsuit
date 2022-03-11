import path from 'path';
import fs from 'fs';

const YAML = require('yaml');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;

export default function wingsuitStoriesLoader(this: any, src) {
  const ast = babylon.parse(src, {
    sourceType: 'module',
  });
  const options = this.getOptions();

  const { appConfig } = options;
  const { resourcePath } = this;
  let absYamlPath = '';
  traverse(ast, {
    VariableDeclaration(pathItem) {
      if (pathItem.node.declarations[0].id.name === 'patternDefinition') {
        const yamlPath = pathItem.node.declarations[0].init.arguments[0].value;
        absYamlPath = path.join(path.dirname(resourcePath), yamlPath);
      }
    },
  });
  if (absYamlPath !== '') {
    const hasIndexFile = fs.existsSync(path.join(path.dirname(resourcePath), 'index.js'));
    const file = fs.readFileSync(absYamlPath, 'utf8');
    const patternDefinition = YAML.parse(file);
    const patternId = Object.keys(patternDefinition)[0];
    const { label } = patternDefinition[patternId];
    const variants = patternDefinition[patternId].variants ?? { __default: { label: 'Default' } };
    const { namespaces } = appConfig;
    let namespace = patternDefinition[patternId].namespace ?? '';
    let namespacePath = '';

    if (namespace === '') {
      Object.keys(namespaces).forEach((key) => {
        if (
          resourcePath.startsWith(namespaces[key]) &&
          namespaces[key].length > namespacePath.length
        ) {
          namespace = key;
          namespacePath = namespaces[key];
        }
      });
    }

    const output: string[] = [];
    if (hasIndexFile) {
      output.push(`import './index'`);
    }
    output.push(`
    import React from 'react';
    import { PatternPreview } from '@wingsuit-designsystem/pattern-react';
    import { argTypes, args } from '@wingsuit-designsystem/storybook/story';
    
    import './${path.basename(absYamlPath)}';
    
    export default {
      title: '${namespace}/${label}',
      component: PatternPreview,
    };
    const Template =  ({ patternId, variantId, ...variables }) => {
      const vars = args(variables, patternId, variantId);
      return <PatternPreview patternId={patternId} variantId={variantId} {...vars}/>;
    };
    `);
    Object.keys(variants).forEach((variantName) => {
      const name = variants[variantName].label.replace(' ', '_');
      output.push(
        `export const ${name} = Template.bind({});
        ${name}.argTypes = argTypes('${patternId}', '${variantName}'),
        ${name}.args = {
          patternId: '${patternId}', 
          variantId: '${variantName}'
        }
        `
      );
    });
    return output.join(';\n');
  }
  return src;
}
