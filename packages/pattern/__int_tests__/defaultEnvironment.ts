// eslint-disable-next-line import/no-extraneous-dependencies
import { TwingEnvironment, TwingFunction, TwingFilter } from 'twing';
import TwigAttribute from '../src/TwigAttribute';
import {
  getPatternConfiguration,
  renderPattern,
  renderPatternPreview,
} from '../src/twigRenderEngine';

// eslint-disable-next-line import/no-extraneous-dependencies
const twingFilters = require('twing-drupal-filters');

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

export function init(environment: TwingEnvironment) {
  twingFilters(environment);
  const filters: any = {
    without: (arg1, ...args) => {
      return Promise.resolve(without(arg1, ...args));
    },
  };

  const functions: any = {
    file_url: twigFileUrl,
    pattern: renderPattern,
    create_attribute: twigAttributeFunction,
    pattern_configuration: getPatternConfiguration,
    pattern_preview: (patternId: string, variables: any = {}, variantId = '__default') => {
      return new Promise((resolve) => {
        renderPatternPreview(patternId, variables, variantId).then((output) => {
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
