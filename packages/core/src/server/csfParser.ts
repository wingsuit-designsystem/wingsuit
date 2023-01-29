import path from 'path';
import fs from 'fs';

const YAML = require('yaml');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;

export function csfParser(resourcePath, src, namespaces, loader: any = null): string {
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
    if (loader) {
      loader.addDependency(absYamlPath);
    }
    const hasIndexFile = fs.existsSync(path.join(path.dirname(resourcePath), 'index.js'));

    const file = fs.readFileSync(absYamlPath, 'utf8');
    const patternDefinition = YAML.parse(file);
    const patternIds = Object.keys(patternDefinition);
    const defaultPatternId = patternIds[0];
    if (!defaultPatternId) {
      return src;
    }
    const defaultPattern = patternDefinition[defaultPatternId];
    const defaultPatternLabel = defaultPattern.label ?? defaultPatternId;
    let defaultPatternNamespace = defaultPattern.namespace ?? '';

    let namespacePath = '';

    if (defaultPatternNamespace === '') {
      Object.keys(namespaces).forEach((key) => {
        if (
          resourcePath.startsWith(namespaces[key]) &&
          namespaces[key].length > namespacePath.length
        ) {
          defaultPatternNamespace = key;
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
      title: '${defaultPatternNamespace}/${defaultPatternLabel}',
      component: PatternPreview,
    }
`);
    patternIds.forEach((patternId) => {
      const { label } = patternDefinition[patternId];
      const variants = patternDefinition[patternId].variants ?? { __default: { label: 'Default' } };
      Object.keys(variants).forEach((variantName) => {
        const variantLabel = variants[variantName].label;
        const storyLabel =
          label === defaultPatternLabel ? variantLabel : `${label}: ${variantLabel}`;
        output.push(
          `export const ${patternId}${variantName}Pattern = {
        name: '${storyLabel}',
        args: {patternId: '${patternId}', variantId: '${variantName}'},
        argTypes: argTypes('${patternId}', '${variantName}')
      }`
        );
      });
    });
    return output.join('\n');
  }
  return src;
}
