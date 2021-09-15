import 'protons';
import MDX from './index.mdx';

const template = require('../../docs.twig');

export default {
  path: '/components/overview',
  template,
  MDX,
  vars: {
    meta_title: 'Components overview',
    meta_description: 'Component types overview.',
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
