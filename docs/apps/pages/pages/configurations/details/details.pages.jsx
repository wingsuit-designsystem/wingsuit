import '../../index';
import MDX from './index.mdx';

const template = require('../../docs.twig');
const html = require('../../html.twig');

export default {
  path: '/configurations/details',
  template,
  html,
  MDX,
  vars: {
    meta_title: 'Overview',
    meta_description: 'Wingsui configuration.',
    next: [
      {
        title: 'Configure webpack',
        text: 'Learn how to add custom webpack configuration, or alter the existing one.',
        link_title: 'continue',
        href: '/configurations/custom-webpack-config',
      },
      {
        title: 'Presets',
        text: 'Learn about presets and how to use them.',
        link_title: 'continue',
        href: '/configurations/preset-webpack',
      },
    ],
  },
};
