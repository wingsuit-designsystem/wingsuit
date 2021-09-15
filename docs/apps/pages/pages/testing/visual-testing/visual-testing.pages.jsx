import 'protons';
import MDX from './index.mdx';

const template = require('../../docs.twig');

export default {
  path: '/testing/visual-testing',
  template,
  MDX,
  vars: {
    meta_title: 'Visual testing',
    meta_description: 'Make Wingsuit work with visual testing.',
    next: [
      {
        title: 'Storybook visual testing documentation',
        link_title: 'Continue',
        href: 'https://storybook.js.org/docs/react/workflows/visual-testing#gatsby-focus-wrapper',
      },
      {
        title: 'Chromatic, great visual testing service made by Storybook',
        link_title: 'Great!',
        href: 'http://chromatic.com/',
      },
      {
        title: 'Storybook addon storyshots',
        link_title: 'Continue',
        href: 'https://github.com/storybookjs/storybook/tree/master/addons/storyshots',
      },
    ],
  },
};
