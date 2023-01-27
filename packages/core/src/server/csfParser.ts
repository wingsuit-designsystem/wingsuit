import path from 'path';
import fs from 'fs';

const YAML = require('yaml');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;

export function csfParser(resourcePath, src, namespaces) {
  const ast = babylon.parse(src, {
    sourceType: 'module',
  });

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
      output.push(`import './index';`);
    }
    output.push(`
    import React from 'react';
    import { PatternPreview } from '@wingsuit-designsystem/pattern-react';
    import { args, argTypes } from '@wingsuit-designsystem/storybook/story';

    import './${path.basename(absYamlPath)}';

    export default {
      title: '${namespace}/${label}',
      component: PatternPreview,
    }
`);
    Object.keys(variants).forEach((variantName) => {
      const name = variants[variantName].label.replace(' ', '_');
      output.push(
        `export const ${variantName} = {
        title: '${name}',
        args: {patternId: '${patternId}', variantId: '${variantName}'},
        argTypes: argTypes('${patternId}', '${variantName}')
      }`
      );
    });
    return output.join('\n');
  }
  return src;
}
