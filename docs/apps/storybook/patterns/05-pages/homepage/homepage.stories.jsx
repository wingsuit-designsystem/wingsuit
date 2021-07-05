import './index';

const tokens = require('wsdata/homepage/tokens.yml');
const component = require('wsdata/homepage/component.yml');
const document = require('wsdata/homepage/document.yml');

export const wingsuit = {
  parameters: {
    layout: 'fullscreen',
  },
  patternDefinition: {
    homepage: {
      label: 'Homepage',
      extends: ['page'],
      fields: {
        menu: {
          preview: '',
        },
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
          ],
        },
      },
    },
  },
};
