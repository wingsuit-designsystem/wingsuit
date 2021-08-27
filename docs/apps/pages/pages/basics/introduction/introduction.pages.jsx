import 'protons';
import MDX from './index.mdx';
import './images/add-blocks.png';

const template = require('../../docs.twig');

export default {
  path: '/basics/introduction',
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
      {
        title: 'Drupal Kickstarter',
        text: 'Drupal Kickstarter with Layout Builder',
        href: '/drupal/ui_patterns/',
        link_title: 'Kickstarter',
      },
    ],
  },
};
