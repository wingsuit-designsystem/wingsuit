import { configure, initJsBehaviors } from '@wingsuit-designsystem/storybook';
import { TwingRenderer } from '@wingsuit-designsystem/pattern';
import { addParameters } from '@storybook/react';

const renderImpl = new TwingRenderer();

const namespaces = require('wsdesignsystem/namespaces');

initJsBehaviors('Drupal');

addParameters({
  themes: {
    list: [
      { name: 'Dark', class: ['dark', 'bg-black'], color: '#000000' },
      { name: 'Gray', class: ['bg-gray-100'], color: '#cecece' },
    ],
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Welcome',
        'Layout',
        'Tokens',
        ['Colors', 'Typography', 'Scales'],
        'Atoms',
        'Molecules',
        'Organisms',
        'Templates',
        'Pages',
      ],
      locales: 'en-US',
    },
  },
});

configure(
  module,
  [
    require.context('./patterns', true, /\.stories(\.jsx|\.js|\.mdx)$/),
    require.context('wspatterns', true, /\.stories(\.jsx|\.js|\.mdx)$/),
  ],
  require.context('./config', false, /\.json|\.ya?ml$/),
  require.context('wspatterns', true, /\.twig$/),
  namespaces,
  renderImpl,
  {
    alterStory: (story) => {
      if (process.env.STORYBOOK_DOCS === 'true') {
        const docsStories = {
          Welcome: 'Welcome',
        };
        if (docsStories[story.title]) {
          return { ...story, ...{ title: docsStories[story.title] } };
        }
        return null;
      }
      return story;
    },
    alterPattern: (pattern) => {
      if (process.env.STORYBOOK_DOCS === 'true') {
        const docsPages = {
          section: 'Section',
          section_slider: 'Section',
          hero: 'Blocks',
          banner: 'Blocks',
          card: 'Blocks',
          rich_text: 'Blocks',
          button_group: 'Blocks',
          avatar: 'Blocks',
        };
        if (docsPages[pattern.getId()]) {
          pattern.setNamespace(docsPages[pattern.getId()]);
          return pattern;
        }
        return null;
      }
      return pattern;
    },
  }
);
