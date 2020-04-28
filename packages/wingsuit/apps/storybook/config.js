import { configure } from '@storybook/html';
import { storage, twigRenderEngine } from '@wingsuit-designsystem/pattern';

const Twig = require('twig');
const twigDrupal = require('twig-drupal-filters');
const wingsuitPatternDefinitions = require('./_silo/patterns');
const wingsuitDataSvgs = require('./_silo/svgs');
const wingsuitDataImage= require('./_data/image.config.yml');
const wingsuitDataTailwind = require('./_silo/tailwind');

const namespaces = require('../../source/default/namespaces');

Twig.cache();
storage.createDefinitions(wingsuitPatternDefinitions);
storage.addGlobal('tailwind', wingsuitDataTailwind);
storage.addGlobal('svgs', wingsuitDataSvgs);
storage.addGlobal('image', wingsuitDataImage);

twigRenderEngine.setNamespaces(namespaces);


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
  './_patterns',
  true
);

require.context(
  './_silo', false, /\.json$/
);
import 'holderjs';
configure(require.context('./_patterns', true, /\.stories\.js$/), module);
