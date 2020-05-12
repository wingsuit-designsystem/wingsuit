const patternDefinition = require('./button.wingsuit.yml');
import mdx from './button.mdx';

export const wingsuit = {
  patternDefinition,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

