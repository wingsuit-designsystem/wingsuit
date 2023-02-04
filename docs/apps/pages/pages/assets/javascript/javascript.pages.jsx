import '../../index';
import MDX from './javascript.mdx';

const template = require('../../docs.twig');
const html = require('../../html.twig');

export default {
  path: '/assets/javascript',
  MDX,
  template,
  html,
  vars: {
    meta_title: 'Javascript',
    meta_description: 'Drupal javascript behaviors are working out of the box in Wingsuit.',
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
