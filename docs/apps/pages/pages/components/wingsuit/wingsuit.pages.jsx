import 'protons';
import MDX from './index.mdx';

const template = require('../../docs.twig');

export default {
  path: '/components/wingsuit',
  template,
  MDX,
  vars: {
    vars: {
      meta_title: 'Wingsuit Pattern',
      meta_description: 'The Wingsuit component definition.',
    },
    next: [
      {
        title: 'Presentation templates',
        text: 'Learn how to create storybook preview pages for your components.',
        link_title: 'continue',
        href: '/components/presentation',
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
