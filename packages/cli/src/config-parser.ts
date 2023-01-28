const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const t = require('babel-types');
const prettier = require('prettier');
const generate = require('babel-generator').default;

export interface AppProperties {
  name: string;
  value: string;
}

export function addApp(appName, appType, appProperties: AppProperties[], source) {
  const ast = babylon.parse(source, {
    sourceType: 'module',
  });
  let hasAppsProperty = false;
  traverse(ast, {
    ObjectProperty(path) {
      if (path.node.key.name === 'apps') {
        hasAppsProperty = true;
      }
    },
  });

  if (hasAppsProperty === false) {
    traverse(ast, {
      ObjectExpression(path) {
        if (path.parent.type === 'AssignmentExpression') {
          const o = t.objectProperty(t.identifier('apps'), t.objectExpression([]));
          o.properties = [];
          path.node.properties.push(o);
        }
      },
    });
  }
  traverse(ast, {
    ObjectProperty(path) {
      if (path.node.type === 'ObjectProperty' && path.node.key.name === 'apps') {
        const properties: any[] = [];
        properties.push(t.objectProperty(t.identifier('type'), t.stringLiteral(appType)));
        appProperties.forEach((property) => {
          properties.push(
            t.objectProperty(t.identifier(property.name), t.stringLiteral(property.value))
          );
        });
        const o = t.objectProperty(t.identifier(appName), t.objectExpression(properties));
        path.node.value.properties.push(o);
      }
    },
  });

  const { code } = generate(
    ast,
    {
      jsonCompatibleStrings: true,
      retainFunctionParens: true,
    },
    source
  );
  const formatted = prettier.format(code, {
    printWidth: 100,
    tabWidth: 2,
    bracketSpacing: true,
    trailingComma: 'es5',
    singleQuote: true,
    parser: 'babel',
  });
  return formatted;
}
