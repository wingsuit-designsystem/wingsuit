import React from 'react';
import { configure } from '@wingsuit-designsystem/storybook';
import './_drupal.js';
import { useEffect } from '@storybook/client-api';

const namespaces = require('../../source/default/namespaces');

import { addDecorator } from '@storybook/react';

addDecorator(storyFn => {
  return <div>{useEffect(() => Drupal.attachBehaviors({}, {}), []) }{storyFn()}</div>
});

configure(
  module,
  [
    require.context('./patterns', true, /\.stories(\.jsx|\.js|\.mdx)$/),
    require.context('../../source/default/patterns', true, /\.stories(\.js|\.mdx)$/),
  ],
  require.context('./config', true, /\.json|\.ya?ml$/),
  require.context('../../source/default/patterns', true, /\.twig$/),
  namespaces
);
