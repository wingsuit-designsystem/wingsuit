/**
 * Use AirBnB ES6 linting standards, as well as a Jest plugin for tests
 *
 * Rule reference: http://eslint.org/docs/rules
 * Individual rule reference: http://eslint.org/docs/rules/NAME-OF-RULE
 */
const wingsuitCore = require('@wingsuit-designsystem/core');
const wingsuitConfig = require('./wingsuit.config');

const appConfig = wingsuitCore.resolveConfig(
  'storybook',
  'development',
  {},
  wingsuitConfig,
  __dirname
);
const { namespaces } = appConfig;
const aliasMap = [];
Object.keys(namespaces).forEach((key) => {
  aliasMap.push([key, namespaces[key]]);
});

module.exports = {
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['prettier'],
  root: true,
  globals: {
    Drupal: true,
    jQuery: true,
    _: true,
    BUILD_TARGET: true,
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'import/no-duplicates': 0,
    'import/no-relative-packages': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/no-named-as-default-member': 0,
    'import/no-self-import': 0,
    'import/order': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-cycle': 0,
    'react/jsx-uses-react': 1,
    'prettier/prettier': 'error',
    'no-console': [0], // turned off for now while we are console.logging everywhere.
    'import/prefer-default-export': [0],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: aliasMap,
      },
    },
  },
};
