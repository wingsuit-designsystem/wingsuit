import '../../index';
import MDX from './index.mdx';

const template = require('../../docs.twig');
const html = require('../../html.twig');

export default {
  path: '/guides/ws2-upgrade',
  template,
  html,
  MDX,
  vars: {
    meta_title: 'Upgrade to Wingsuit 2.',
    meta_description: 'Tutorial to upgrade to Wingsuit 2.',

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
