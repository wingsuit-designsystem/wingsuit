import mdx from './button.mdx';

const patternDefinition = require('./button.wingsuit.yml');

export const wingsuit = {
  patternDefinition,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};
