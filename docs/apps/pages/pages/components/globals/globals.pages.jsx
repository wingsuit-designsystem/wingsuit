import 'protons';
import MDX from './index.mdx';

const template = require('../../docs.twig');

export default {
  path: '/components/globals',
  template,
  MDX,
  vars: {
    meta_title: 'Globals',
    meta_description: 'global scope variables inside your twig template.',
    next: [
      {
        title: 'UI Patterns',
        text: 'Learn how wingsuit leverages UI patterns.',
        link_title: 'continue',
        href: '/components/wingsuit',
      },
      {
        title: 'Presentation templates',
        text: 'Learn how to create storybook preview pages for your components.',
        link_title: 'continue',
        href: '/components/presentation',
      },
    ],
  },
};
