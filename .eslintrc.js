module.exports = {
  root: true,
  extends: ['@storybook/eslint-config-storybook'],
  overrides: [
    {
      files: ['**/__tests__/**', '**/__testfixtures__/**', '**/*.test.*', '**/*.stories.*'],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['**/__testfixtures__/**'],
      rules: {
        'react/forbid-prop-types': 'off',
        'react/no-unused-prop-types': 'off',
        'react/require-default-props': 'off',
      },
    },
    { files: '**/.storybook/config.js', rules: { 'global-require': 'off' } },
    {
      files: ['**/*.stories.*'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['**/*.tsx', '**/*.ts'],
      rules: {
        'react/no-danger': 'off',
        'react/prop-types': 'off', // we should use types
        'no-dupe-class-members': 'off', // this is called overloads in typescript
        'no-console': ['error', { allow: ['warn', 'error'] }],
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'vars-on-top': 'off',
        'no-var': 'off', // this is how typescript works
        'spaced-comment': 'off',
      },
    },
  ],
};
