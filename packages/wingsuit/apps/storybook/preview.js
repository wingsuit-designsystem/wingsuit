import { configure } from '@wingsuit-designsystem/storybook';

const namespaces = require('../../source/default/namespaces');

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
