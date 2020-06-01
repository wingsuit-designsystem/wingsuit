import { configure, drupalAttachBehaviorDecorator } from '@wingsuit-designsystem/storybook';

import { addDecorator } from '@storybook/react';

const namespaces = require('../../source/default/namespaces');

addDecorator(drupalAttachBehaviorDecorator);

configure(
  module,
  [
    require.context('./patterns', true, /\.stories(\.jsx|\.js|\.mdx)$/),
    require.context('../../source/default/patterns', true, /\.stories(\.jsx|\.js|\.mdx)$/),
  ],
  require.context('./config', true, /\.json|\.ya?ml$/),
  require.context('../../source/default/patterns', true, /\.twig$/),
  namespaces
);
