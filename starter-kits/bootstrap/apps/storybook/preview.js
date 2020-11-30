import {
  configure,
  initDecorator,
  isInitDecorator,
  attachBehaviorDecorator,
} from '@wingsuit-designsystem/storybook';
import { addDecorator, addParameters } from '@storybook/react';

const namespaces = require('wsdesignsystem/namespaces.js');

console.log(namespaces);
if (isInitDecorator() === false) {
  initDecorator('Drupal');
  addDecorator(attachBehaviorDecorator);
}

addParameters({
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Base',
        ['Welcome', 'Colors', 'Typography', 'Scales', 'Layout'],
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
