import 'protons';
import MDX from './index.mdx';
import './images/add-blocks.png';

const template = require('../../docs.twig');

export default {
  path: '/basics/introduction',
  template,
  MDX,
  vars: {
    next: [
      {
        title: 'Quickstart guide',
        text: 'Lets to the 5 minute quickstart guide!',
        href: 'quickstart',
        link_title: 'Quickstart',
      },
    ],
  }
};
