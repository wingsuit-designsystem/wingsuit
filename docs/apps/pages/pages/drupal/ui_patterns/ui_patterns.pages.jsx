import 'protons';
import MDX from './index.mdx';
import './images/kickstarter.png';

const template = require('./index.twig');
const html = require('../../html.twig');

export default {
  path: '/drupal/ui_patterns',
  template,
  html,
  MDX,
  vars: {
    meta_title: 'Drupal Kickstarter',
    meta_description: 'Kickstarter for Wingsuit.',
  },
};
