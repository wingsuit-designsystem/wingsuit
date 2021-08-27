import 'protons';
import MDX from './index.mdx';

const template = require('../../docs.twig');

export default {
  path: '/components/overview',
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
        title: 'Presentation templates',
        text: 'Learn how to create storybook preview pages for your components.',
        link_title: 'continue',
        href: '/components/presentation',
      },
    ],
  },
};
