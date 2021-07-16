import 'protons';
import MDX from './index.mdx';

const template = require('../../docs.twig');

export default {
  path: '/presets/compression',
  template,
  MDX,
  vars: {
    next: [
      {
        title: 'Imagemin Preset',
        text: 'Optimize your images and create webp variants of them on the fly.',
        link_title: 'continue',
        href: '/presets/imagemin',
      },
      {
        title: 'PWA Preset',
        text: 'Let wingsuit generate all your favicons and a manifest.json for pwa enhancements for you.',
        link_title: 'continue',
        href: '/presets/pwa',
      },
    ],
  },
};
