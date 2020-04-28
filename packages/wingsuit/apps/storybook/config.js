const namespaces = require('../../source/default/namespaces');
import {init} from '@wingsuit-designsystem/storybook';

require.context(
  '../../source/default/_patterns',
  true,
  /^\.\/(01-atoms|02-molecules|03-organisms)\/[\w-]+$/
);

require.context(
  './_patterns',
  true
);

init(module,
  require.context('./_patterns', true, /\.stories\.js$/),
  require.context('./_config', true, /\.json|\.ya?ml$/,),
  namespaces)
;
