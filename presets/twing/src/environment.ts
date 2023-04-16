import { renderer, TwigAttribute } from '@wingsuit-designsystem/pattern';

const { TwingEnvironment, TwingFunction, TwingLoaderFilesystem, TwingFilter } = require('twing');

const twingFilters = require('twing-drupal-filters');

const loader = new TwingLoaderFilesystem();

const environment = new TwingEnvironment(loader, { autoescape: false, debug: true });

// In storybook we get this returned as an instance of
// TWigLoaderNull, we need to avoid processing this.
if (typeof loader.addPath === 'function') {
  const namespaces = renderer.getNamespaces();
  Object.keys(namespaces).forEach((namespace) => {
    loader.addPath(namespaces[namespace], namespace);
  });
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
  const filters: any = {
    without: (arg1, ...args) => {
      return Promise.resolve(without(arg1, ...args));
    },
  };

  const functions: any = {
    file_url: twigFileUrl,
    pattern: renderer.renderPattern,
    create_attribute: twigAttributeFunction,
    pattern_configuration: renderer.getPatternConfiguration,
    pattern_preview: (patternId: string, variables: any = {}, variantId = '__default') => {
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
init();
module.exports = environment;
