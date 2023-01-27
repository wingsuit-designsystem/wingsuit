import { TwingEnvironment, TwingFunction, TwingLoaderFilesystem, TwingFilter } from 'twing';
import { renderer, TwigAttribute } from '@wingsuit-designsystem/pattern';
import { TwingRenderer } from './TwingRenderer';

const twingFilters = require('twing-drupal-filters');

const ecAbsPath =
  '/home/cw/projects/wingsuit/wingsuit/starter-kits/tailwind/source/default/patterns/01-atoms/';
const loader = new TwingLoaderFilesystem(ecAbsPath);

const environment = new TwingEnvironment(loader);

// In storybook we get this returned as an instance of
// TWigLoaderNull, we need to avoid processing this.
if (typeof loader.addPath === 'function') {
  // Add namespace ecl-twig.
  loader.addPath(
    '/home/cw/projects/wingsuit/wingsuit/starter-kits/tailwind/source/default/patterns/01-atoms',
    'atoms'
  );
}

function twigAttributeFunction(attributes = '') {
  return Promise.resolve(new TwigAttribute(attributes));
}

function twigFileUrl(url) {
  return Promise.resolve(url.replace('ws-assets://', ''));
}

function without(element, ...args) {
  if (!element) {
    return [];
  }
  if (element instanceof TwigAttribute) {
    args.forEach((key) => {
      element.removeAttribute(key);
    });
  }

  return element;
}

export function init() {
  twingFilters(environment);
  const filters: {} = {
    without: (arg1, ...args) => {
      return Promise.resolve(without(arg1, ...args));
    },
  };

  const functions: {} = {
    file_url: twigFileUrl,
    pattern: renderer.renderPattern,
    create_attribute: twigAttributeFunction,
    pattern_configuration: renderer.getPatternConfiguration,
    pattern_preview: (patternId: string, variables: {} = {}, variantId = '__default') => {
      return new Promise((resolve) => {
        renderer.renderPatternPreview(patternId, variables, variantId).then((output) => {
          resolve(output);
        });
      });
    },
  };
  Object.keys(functions).forEach((key) => {
    environment.addFunction(new TwingFunction(key, functions[key], []));
  });
  Object.keys(filters).forEach((key) => {
    environment.addFilter(new TwingFilter(key, filters[key], []));
  });
}
renderer.setRenderer(new TwingRenderer());
init(environment);
module.exports = environment;
