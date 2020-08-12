import {
  configure,
  initDecorator,
  attachBehaviorDecorator,
} from '@wingsuit-designsystem/storybook';
import { addDecorator, addParameters } from '@storybook/react';

const namespaces = require('../../source/default/namespaces');

initDecorator('Drupal');
addDecorator(attachBehaviorDecorator);

addParameters({
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Base',
        ['Welcome', 'Colors', 'Typeset'],
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
    require.context('../../source/default/patterns', true, /\.stories(\.jsx|\.js|\.mdx)$/),
  ],
  require.context('./config', false, /\.json|\.ya?ml$/),
  require.context('../../source/default/patterns', true, /\.twig$/),
  namespaces
);
