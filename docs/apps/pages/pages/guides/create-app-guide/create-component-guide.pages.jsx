import 'protons';
// import MDX from './index.mdx';
import pattern from './index.yml';

export default {
  path: '/guides/create-app-guide',
  pattern,
  vars: {
    next: [
      {
        title: 'Configure your app?',
        text: 'Check the parameters under the "App details" section and extend your wingsuit.config.js',
        link_title: 'Details',
        href: '/configurations/details',
      },
    ],
  },
};
