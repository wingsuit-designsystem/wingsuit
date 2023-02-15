import path from 'path';
import fs from 'fs';
import { AppConfig, invokeHook } from '../index';

const YAML = require('yaml');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;

export function csfParser(resourcePath, src, appConfig: AppConfig, loader: any = null): string {
  const { namespaces } = appConfig;
  const ast = babylon.parse(src, {
    sourceType: 'module',
  });

  let absYamlPath = '';
  let patternClientYamlPath = '';
  traverse(ast, {
    VariableDeclaration(pathItem) {
      if (pathItem.node.declarations[0].id.name === 'patternDefinition') {
        const yamlPath = pathItem.node.declarations[0].init.arguments[0].value;
        if (yamlPath.startsWith('.') || yamlPath.startsWith('/')) {
          absYamlPath = path.join(path.dirname(resourcePath), yamlPath);
          patternClientYamlPath = `./${path.basename(absYamlPath)}`;
        } else {
          absYamlPath = require.resolve(yamlPath);
          patternClientYamlPath = `${yamlPath}`;
        }
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
    invokeHook(appConfig, 'storyLoaded', [defaultPatternId, defaultPattern]);
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
    import { storage } from '@wingsuit-designsystem/pattern';
    import { PatternPreview } from '@wingsuit-designsystem/pattern-react';
    import { args, argTypes, PatternDoc } from '@wingsuit-designsystem/storybook';
    import {
      ArgsTable,
      Description, Primary, PRIMARY_STORY, Stories,
      Subtitle,
      Title
    } from "@storybook/addon-docs";

    import '${patternClientYamlPath}';

    export default {
      title: '${defaultPatternNamespace}/${defaultPatternLabel}',
      component: PatternPreview,
      tags: ['autodocs'],
     }
     let pattern = null;
`);
    patternIds.forEach((patternId) => {
      const { label } = patternDefinition[patternId];
      const variants = patternDefinition[patternId].variants ?? { __default: { label: 'Default' } };
      Object.keys(variants).forEach((variantName) => {
        const variantLabel = variants[variantName].label;
        const storyLabel =
          label === defaultPatternLabel ? variantLabel : `${label}: ${variantLabel}`;
        output.push(
          `
          
          export const ${patternId}${variantName}Pattern = {
          name: '${storyLabel}',
          args: {patternId: '${patternId}', variantId: '${variantName}', ...storage.loadVariant('${patternId}', '${variantName}').getVariables(true, true, false) },
          argTypes: argTypes('${patternId}', '${variantName}'),
          parameters: {
          docs: {
            page: () => (
            <>
              <Title />
              <Subtitle />
              <Description />
              <Primary />
              <ArgsTable story={PRIMARY_STORY} />
              <PatternDoc pattern={storage.loadPattern('${patternId}')}/>
            </>
          ),
        }
      }
      }`
        );
      });
    });
    return output.join('\n');
  }
  return src;
}
