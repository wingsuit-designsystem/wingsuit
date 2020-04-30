const namespaces = require('../../source/default/namespaces');
import {configure} from '@wingsuit-designsystem/storybook';

require.context(
  './_patterns',
  true
);
require.context(
  '../../source/default/_patterns',
  true,
  /^\.\/(01-atoms|02-molecules|03-organisms)\/[\w-]+$/
)

configure(module,
  require.context('./_patterns', true, /\.stories\.js$/),
  require.context('./_config', true, /\.json|\.ya?ml$/,),
  require.context(
    '../../source/default/_patterns',
    true,
    /\.wingsuit\.ya?ml$/
  ),
  require.context(
    '../../source/default/_patterns',
    true,
    /\.twig$/
  ),
  namespaces)
;
