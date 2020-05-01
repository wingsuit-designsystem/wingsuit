import {configure} from '@wingsuit-designsystem/storybook';
const namespaces = require('../../source/default/namespaces');

configure(module,
  require.context('./_patterns', true, /\.stories\.js$/),
  require.context('./_config', true, /\.json|\.ya?ml$/,),
  require.context(
    '../../source/default/_patterns',
    true,
    /\.js$/
  ),
  require.context(
    '../../source/default/_patterns',
    true,
    /\.twig$/
  ),
  namespaces)
;
