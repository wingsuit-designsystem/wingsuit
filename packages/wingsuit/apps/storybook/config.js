import { configure } from '@storybook/html';
import { storage, twigRenderEngine } from '@wingsuit-designsystem/pattern';

const Twig = require('twig');
const twigDrupal = require('twig-drupal-filters');
const wingsuitPatternDefinitions = require('./_silo/patterns.json');
const wingsuitDataSvgs = require('./_silo/svgs');
const wingsuitDataTailwind = require('./_silo/tailwind');

const namespaces = require('../../source/default/namespaces');

Twig.cache();
storage.createDefinitions(wingsuitPatternDefinitions);

twigRenderEngine.setNamespaces(namespaces);
twigRenderEngine.addGlobal('tailwind', wingsuitDataTailwind);
twigRenderEngine.addGlobal('svgs', wingsuitDataSvgs);
twigRenderEngine.setTwig(Twig)
twigRenderEngine.twigFunctions();

twigDrupal(Twig);
// twigAddAttributes(Twig);

require.context(
  '../../source/default/_patterns',
  true,
  /^\.\/(01-atoms|02-molecules|03-organisms)\/[\w-]+$/
);

require.context(
  './_silo', false, /\.json$/
);
configure(require.context('./_patterns', true, /\.stories\.js$/), module);
