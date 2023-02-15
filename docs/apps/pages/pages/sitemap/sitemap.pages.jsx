const template = require('./sitemap.twig');
const html = require('./sitemap-html.twig');

export default {
  path: '/sitemap.html',
  template,
  html,
  vars: {
    meta_title: 'test',
    meta_description: 'test',
  },
};
