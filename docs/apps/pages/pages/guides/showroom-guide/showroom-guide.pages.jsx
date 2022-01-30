import 'protons';
import MDX from './index.mdx';

const template = require('../../docs.twig');

export default {
  path: '/guides/showroom',
  template,
  MDX,
  vars: {
    meta_title: 'Showroom',
    meta_description: 'Display storybook components for your customer.',

    next: [
      {
        title: 'Configure your app?',
        text: 'Check the parameters under the "App details" section and extend your wingsuit.config.js',
        link_title: 'Details',
        href: '/configurations/details',
      },
    ],
  },
};
