import 'protons';
import MDX from './index.mdx';

const template = require('../../docs.twig');

export default {
  path: '/configurations/custom-webpack-config',
  template,
  MDX,
  vars: {
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
