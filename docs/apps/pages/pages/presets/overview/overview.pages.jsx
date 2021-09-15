import 'protons';
import MDX from './index.mdx';

const template = require('../../docs.twig');

export default {
  path: '/presets/overview',
  template,
  MDX,
  vars: {
    meta_title: 'Presets',
    meta_description:
      'Wingsuit uses presets to make webpack configurations reusable across different apps.',
    next: [
      {
        title: 'Compression Preset',
        text: 'Gzip and Brotli compression for your files.',
        link_title: 'continue',
        href: '/presets/compression',
      },
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
