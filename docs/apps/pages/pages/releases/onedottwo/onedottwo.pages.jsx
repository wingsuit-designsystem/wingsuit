import '../../index';
import MDX from './index.mdx';

const template = require('../../docs.twig');
const html = require('../../html.twig');

export default {
  path: '/releases/onedottwo',
  template,
  html,
  MDX,
  vars: {
    meta_title: 'Wingsuit Version 1.2',
    meta_description: 'We have added a lot of new features in Version 1.2.',
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
