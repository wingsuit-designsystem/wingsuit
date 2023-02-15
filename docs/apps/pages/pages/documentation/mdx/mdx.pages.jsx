import 'protons';
import MDX from './index.mdx';
import html from '../../html.twig';
import './images/grid-doc.png';

const template = require('../../docs.twig');

export default {
  vars: {
    meta_title: 'MDX Docs',
    meta_description: 'Document your components with MDX.',
  },
  path: '/documentation/mdx',
  template,
  html,
  MDX,
};
