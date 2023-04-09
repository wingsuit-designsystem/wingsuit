import 'protons';
import 'organisms/download';
import 'molecules/hero';
import 'molecules/tabs';
import 'organisms/section-code';
import 'templates/page';

import './images/mariage.png';

import pageTemplate from 'templates/page/page.twig';

// eslint-disable-next-line import/no-unresolved
const tokens = require('wsdata/homepage/tokens.yml');
// eslint-disable-next-line import/no-unresolved
const component = require('wsdata/homepage/component.yml');
// eslint-disable-next-line import/no-unresolved
const love = require('wsdata/homepage/love.yml');
// eslint-disable-next-line import/no-unresolved
const document = require('wsdata/homepage/document.yml');

const html = require('../html.twig');

export default {
  path: '/index.html',
  html,
  vars: {
    meta_title: 'Build Twig Components in Storybook',
    meta_description:
      'A modern way of building, maintaining and documenting your visual driven twig components in storybook.',
  },
  pattern: {
    label: 'Homepage',
    id: 'frontpage',
    template: pageTemplate,
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
