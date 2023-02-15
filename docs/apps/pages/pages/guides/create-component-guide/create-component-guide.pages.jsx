import '../../index';
import MDX from './index.mdx';

const template = require('../../docs.twig');
const html = require('../../html.twig');

export default {
  path: '/guides/create-component-guide',
  template,
  html,
  MDX,
  vars: {
    meta_title: 'Create new component',
    meta_description:
      'The wizard will guide you through all possible pattern types, including documentation.',
    next: [
      {
        title: 'Not sure which component type you need?',
        text: 'Check the docs!',
        link_title: 'Component types',
        href: '/components/overview',
      },
    ],
  },
};
