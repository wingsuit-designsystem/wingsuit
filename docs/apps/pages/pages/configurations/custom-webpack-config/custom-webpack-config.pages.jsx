import '../../index';
import MDX from './index.mdx';

const template = require('../../docs.twig');
const html = require('../../html.twig');

export default {
  path: '/configurations/custom-webpack-config',
  template,
  html,
  MDX,
  vars: {
    meta_title: 'Configuration2',
    meta_description: 'Custom webpack configuration.',
    next: [
      {
        title: 'Presets',
        text: 'Learn about presets and how to use them.',
        link_title: 'continue',
        href: '/presets/overview',
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
