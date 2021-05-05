import 'protons';
import MDX from './images.mdx';

const template = require('../../docs.twig');

export default {
  path: '/assets/images',
  MDX,
  template,
  vars: {
    next: [
      {
        title: 'SVG',
        text: 'Learn how to use svg assets in your patterns.',
        link_title: 'continue',
        href: '/assets/svg',
      },
      {
        title: 'Javascript',
        text: 'Learn how to use javascript in your patterns.',
        link_title: 'continue',
        href: '/assets/javascript',
      },
    ]
  }
};
