import 'protons';
import MDX from './index.mdx';

const template = require('../../docs.twig');

export default {
  path: '/configurations/preset-webpack',
  template,
  MDX,
  vars: {
    next: [
      {
        title: 'Configure webpack',
        text: 'Learn how to add custom webpack configuration, or alter the existing one.',
        link_title: 'continue',
        href: '/configurations/custom-webpack-config',
      },
      {
        title: 'Components',
        text: 'Learn about creating and editing components.',
        link_title: 'continue',
        href: '/components/overview',
      },
    ]
  }
};
