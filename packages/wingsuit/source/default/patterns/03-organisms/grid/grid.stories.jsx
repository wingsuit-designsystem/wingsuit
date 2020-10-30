import './index';
import mdx from './grid.mdx';

const patternDefinition = require('./grid.wingsuit.yml');

export const wingsuit = {
  patternDefinition,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: mdx,
    },
  },
};
