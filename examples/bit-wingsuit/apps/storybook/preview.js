import { configure, initJsBehaviors } from '@wingsuit-designsystem/storybook';
import { addParameters } from '@storybook/react';

const namespaces = require('wsdesignsystem/namespaces');

initJsBehaviors('Drupal');

addParameters({
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
  namespaces
);
