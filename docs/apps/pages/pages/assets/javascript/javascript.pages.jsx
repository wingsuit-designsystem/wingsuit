import 'protons';
import MDX from './javascript.mdx';

const template = require('../../docs.twig');

export default {
  path: '/assets/javascript',
  MDX,
  template,
  vars: {
    next: [
      {
        title: 'Images & Icons',
        text: 'Learn how to use images and icons in your patterns.',
        link_title: 'continue',
        href: '/assets/images',
      },
      {
        title: 'SVG',
        text: 'Learn how to use svg assets in your patterns.',
        link_title: 'continue',
        href: '/assets/svg',
      },
    ],
  },
};
