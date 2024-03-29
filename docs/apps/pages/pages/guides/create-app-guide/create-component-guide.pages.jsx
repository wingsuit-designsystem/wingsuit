import 'protons';
import MDX from './index.mdx';

const template = require('../../docs.twig');

export default {
  path: '/guides/create-app-guide',
  template,
  MDX,
  vars: {
    meta_title: 'Create new app',
    meta_description: 'The wizard will guide you through app generation.',

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
