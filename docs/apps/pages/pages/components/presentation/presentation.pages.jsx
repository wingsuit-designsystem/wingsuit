import 'protons';
import MDX from './index.mdx';

const template = require('../../docs.twig');

export default {
  path: '/components/presentation',
  template,
  MDX,
  vars: {
    next: [
      {
        title: 'UI Patterns',
        text: 'Learn how wingsuit leverages UI patterns.',
        link_title: 'continue',
        href: '/components/wingsuit',
      },
      {
        title: 'Assets',
        text: 'Learn how to manage your css, js and other asses with wingsuit.',
        link_title: 'continue',
        href: '/assets/overview',
      },
    ],
  },
};
