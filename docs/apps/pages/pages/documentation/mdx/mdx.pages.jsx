import 'protons';
import MDX from './index.mdx';

import './images/grid-doc.png';

const template = require('../../docs.twig');

export default {
  path: '/documentation/mdx',
  template,
  MDX,
};
