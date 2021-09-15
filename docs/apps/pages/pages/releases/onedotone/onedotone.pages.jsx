import 'protons';
import MDX from './index.mdx';

const template = require('../../docs.twig');

export default {
  path: '/releases/onedotone',
  template,
  MDX,
  vars: {
    meta_title: 'Wingsuit Version 1.1',
    meta_description: 'We have added a lot of new features in Version 1.1.',
    next: [
      {
        title: 'Did we catch your interest?',
        text: 'Do the 10 minute quickstart guide!',
        href: '/guides/quick-start-guide',
        link_title: 'Quickstart',
      },
    ],
  },
};
