import 'protons';
import './images/storybook.png';

import MDX from './index.mdx';

const template = require('./quick.twig');

export default {
  path: '/guides/quick-start-guide',
  template,
  MDX,
  vars: {
    meta_title: 'Automated command line tool',
    meta_description: 'This command creates a Wingsuit demo project.',
    next: [
      {
        title: 'Create a new component',
        text: 'Learn how to use wingsuit by building a new component.',
        link_title: 'continue',
        href: '/guides/create-component-guide',
      },
    ],
  },
};
