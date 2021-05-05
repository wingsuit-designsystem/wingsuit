import 'protons';
import MDX from './index.mdx';

const template = require('../../docs.twig');

export default {
  path: '/guides/quick-start-guide',
  template,
  MDX,
  vars: {
    next: [
      {
        title: 'Drupal kickstarter',
        text: 'with UI Patterns and layout builder.',
        link_title: 'continue',
        href: '/drupal/ui_patterns',
      },
      {
        title: 'Create a new component',
        text: 'Learn how to use wingsuit by building a new component.',
        link_title: 'continue',
        href: '/guides/create-component-guide',
      }
    ]
  }
};
