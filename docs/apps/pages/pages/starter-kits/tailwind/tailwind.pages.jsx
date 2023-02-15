import '../../index';
import MDX from './index.mdx';

const template = require('../../docs.twig');
const html = require('../../html.twig');

export default {
  path: '/starter-kits/tailwind-drupal',
  template,
  html,
  MDX,
  vars: {
    meta_title: 'Drupal loves TailwindCSS',
    meta_description: 'Wingsuit starter kit for TailwindCSS.',
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
