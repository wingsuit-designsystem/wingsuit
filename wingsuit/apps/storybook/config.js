import {
  configure
} from '@storybook/html';

require.context(
  // From patterns folder
  '../../source/default/_patterns',
  // Deep dive all directories below
  true,
  // Get the first folders after atoms|molecules|organisms
  /^\.\/(01-atoms|02-molecules|03-organisms)\/[\w-]+$/
);

require.context(
  // From patterns folder
  './_silo',
  // Deep dive all directories below
  false,
  // Get the first folders after atoms|molecules|organisms
  /\.json$/
);
configure(require.context('./_patterns', true, /\.stories\.js$/), module);
