import 'protons';
import MDX from './index.mdx';

const template = require('../../docs.twig');

export default {
  path: '/documentation/overview',
  template,
  MDX,
  vars: {
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
