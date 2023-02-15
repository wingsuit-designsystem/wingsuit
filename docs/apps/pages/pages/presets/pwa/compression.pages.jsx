import '../../index';
import MDX from './index.mdx';

const template = require('../../docs.twig');
const html = require('../../html.twig');

export default {
  path: '/presets/pwa',
  template,
  html,
  MDX,
  vars: {
    meta_title: 'Favicon Preset',
    meta_description:
      'Wingsuit also ships with a pwa (favicon) preset, which uses WebappWebpackPlugin.',

    next: [
      {
        title: 'UI Patterns',
        text: 'Learn how wingsuit leverages UI patterns.',
        link_title: 'continue',
        href: '/components/wingsuit',
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
