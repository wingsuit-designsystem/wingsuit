import {
  configure,
  initDecorator,
  isInitDecorator,
  attachBehaviorDecorator,
} from '@wingsuit-designsystem/storybook';
import { addDecorator, addParameters } from '@storybook/react';

const namespaces = require('wsdesignsystem/namespaces');

if (isInitDecorator() === false) {
  initDecorator('Drupal');
  addDecorator(attachBehaviorDecorator);
}

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
