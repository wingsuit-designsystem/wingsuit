import generate from '@babel/generator';
import path from 'path';

const babylon = require('babylon');
const traverse = require('babel-traverse').default;

export default function wingsuitStoriesLoader(this: any, src) {
  const ast = babylon.parse(src, {
    sourceType: 'module',
  });
  const that = this;
  traverse(ast, {
    VariableDeclaration(pathItem) {
      if (pathItem.node.declarations[0].id.name === 'patternDefinition') {
        const yamlPath = pathItem.node.declarations[0].init.arguments[0].value;
        const absYamlPath = path.join(path.dirname(that.resourcePath), yamlPath);

        console.log('\nTEST\n');
        console.log(absYamlPath);
      }
    },
  });

  return src;
}
