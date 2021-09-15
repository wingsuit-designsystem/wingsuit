import 'protons';
import MDX from './index.mdx';

const template = require('../../docs.twig');

export default {
  path: '/apps/drupal',
  template,
  MDX,
  vars: {
    meta_title: 'Drupal APP',
    meta_description: 'Wingsuit APP for drupal.',
    next: [
      {
        title: 'UI Patterns',
        text: 'Learn how wingsuit leverages UI patterns.',
        link_title: 'continue',
        href: '/components/wingsuit',
      },
      {
        title: 'Components',
        text: 'Learn about creating and editing components.',
        link_title: 'continue',
        href: '/components/overview',
      },
    ],
  },
};
