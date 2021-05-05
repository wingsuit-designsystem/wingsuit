import 'protons';
import MDX from './index.mdx';

const template = require('../../docs.twig');

export default {
  path: '/guides/create-component-guide',
  template,
  MDX,
  vars: {
    next: [
      {
        title: 'Not sure which component type you need?',
        text: 'Check the docs!',
        link_title: 'Component types',
        href: '/components/overview',
      },
    ]
  }
};
