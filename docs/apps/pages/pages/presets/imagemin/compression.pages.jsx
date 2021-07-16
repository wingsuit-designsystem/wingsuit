import 'protons';
import MDX from './index.mdx';

const template = require('../../docs.twig');

export default {
  path: '/presets/imagemin',
  template,
  MDX,
  vars: {
    next: [
      {
        title: 'PWA Preset',
        text: 'Let wingsuit generate all your favicons and a manifest.json for pwa enhancements for you.',
        link_title: 'continue',
        href: '/presets/pwa',
      },
      {
        title: 'Components',
        text: 'Learn about creating and editing components.',
        link_title: 'continue',
        href: '/components/overview',
      },
    ],
  },
};
