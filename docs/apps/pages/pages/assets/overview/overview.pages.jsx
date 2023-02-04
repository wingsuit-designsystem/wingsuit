import '../../index';
import MDX from './overview.mdx';

const template = require('../../docs.twig');
const html = require('../../html.twig');

export default {
  path: '/assets/overview',
  MDX,
  template,
  html,
  vars: {
    meta_title: 'Assets overview',
    meta_description:
      'Wingsuit will compile all assets, which are @import ed inside the design system.',
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
      {
        title: 'Javascript',
        text: 'Learn how to use javascript in your patterns.',
        link_title: 'continue',
        href: '/assets/javascript',
      },
    ],
  },
};
