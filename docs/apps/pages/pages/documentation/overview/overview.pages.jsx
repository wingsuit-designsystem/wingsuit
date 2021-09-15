import 'protons';
import MDX from './index.mdx';

const template = require('../../docs.twig');

export default {
  path: '/documentation/overview',
  template,
  MDX,
  vars: {
    vars: {
      meta_title: 'Documents Overview',
      meta_description: 'Wingsuit supports powerful MDX documentation out of the box.',
    },
    next: [
      {
        title: 'Extend Wingsuit component documentation',
        link_title: 'Continue',
        href: '/documentation/mdx',
      },
      {
        title: 'Storybook MDX documentation',
        link_title: 'Continue',
        href: 'https://storybook.js.org/docs/react/api/mdx',
      },
    ],
  },
};
