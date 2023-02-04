import '../../index';
import MDX from './index.mdx';

const template = require('../../docs.twig');
const html = require('../../html.twig');

export default {
  path: '/apps/overview',
  template,
  MDX,
  html,
  vars: {
    meta_title: 'Apps overview',
    meta_description: 'Integrate your Design System into your application or CMS.',
    next: [
      {
        title: 'UI Patterns',
        text: 'Learn how wingsuit leverages UI patterns.',
        link_title: 'continue',
        href: '/components/wingsuit',
      },
      {
        title: 'Presentation templates',
        text: 'Learn how to create storybook preview pages for your components.',
        link_title: 'continue',
        href: '/components/presentation',
      },
    ],
  },
};
