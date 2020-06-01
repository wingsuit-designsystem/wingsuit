const base = require('@storybook/linter-config/prettier.config');

module.exports = {
  ...base,
  arrowParens: 'always',
  endOfLine:"auto",
  overrides: [
    {
      files: '*.html',
      options: { parser: 'babel' },
    },
  ],
};
