import {
  configure
} from '@storybook/html';

const Twig = require('twig');
const twigDrupal = require('twig-drupal-filters');
// const twigAddAttributes = require('add-attributes-twig-extension');

Twig.cache();

twigDrupal(Twig);
// twigAddAttributes(Twig);

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
