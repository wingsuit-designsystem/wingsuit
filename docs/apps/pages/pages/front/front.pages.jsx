import 'protons';

const tokens = require('wsdata/homepage/tokens.yml');
const component = require('wsdata/homepage/component.yml');
const love = require('wsdata/homepage/love.yml');
const document = require('wsdata/homepage/document.yml');

export default {
  path: '/',
  vars: {
    meta_title: 'Build Twig Components in Storybook',
    meta_description:
      'A modern way of building, maintaining and documenting your visual driven twig components in storybook.',
  },
  pattern: {
    label: 'Homepage',
    extends: ['page'],
    fields: {
      content: {
        preview: [
          { id: 'hero' },
          {
            id: 'section_code',
            fields: tokens,
          },
          {
            id: 'section_code',
            fields: component,
          },
          {
            id: 'section_code',
            fields: document,
          },
          {
            id: 'section_code',
            fields: love,
          },
          {
            id: 'download',
          },
        ],
      },
    },
  },
};
