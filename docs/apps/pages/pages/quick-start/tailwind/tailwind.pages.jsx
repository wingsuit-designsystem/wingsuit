import 'protons';
import MDX from './index.mdx';

const template = require('../../docs.twig');

export default {
  path: '/quick-start/tailwind',
  template,
  MDX,
  vars: {
    next: [
      {
        title: 'Did we catch your interest?',
        text: 'Do the 10 minute quickstart guide!',
        href: '/guides/quick-start-guide',
        link_title: 'Quickstart',
      },
    ],
  },
};
