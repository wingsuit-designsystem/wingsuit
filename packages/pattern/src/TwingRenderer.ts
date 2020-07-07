import { TwingLoaderArray } from 'twing';
import { TwingLoaderInterface } from 'twing/dist/types/lib/loader-interface';
import IRenderer from './IRenderer';
import { twigAttributeFunction, twigItok, twigFileUrl } from './twigExtensions';
import { renderPattern, renderPatternPreview } from './twigRenderEngine';
import { storage } from './index';
import Pattern from './Pattern';

const { TwingEnvironment, TwingFilter, TwingFunction } = require('twing');
const filters = require('twig-drupal-filters/filters');
const functions = require('twig-drupal-filters/functions');

export class TwingRenderer implements IRenderer {
  private environment;

  private cache: {} = {};

  addTemplate(path, template) {
    this.environment.getLoader().setTemplate(path, template);
  }

  setLoader(loader: TwingLoaderInterface) {
    this.environment.setLoader(loader);
  }

  constructor() {
    const loader = new TwingLoaderArray(storage.getTwigResources());
    this.environment = new TwingEnvironment(loader, { autoescape: false, debug: true });
    this.cache = {};
    Object.keys(filters).forEach(filterName => {
      const filter = (arg1, arg2) => {
        return Promise.resolve(filters[filterName](arg1, arg2));
      };
      this.environment.addFilter(new TwingFilter(filterName, filter));
    });

    Object.keys(functions).forEach(functionName => {
      if (functionName !== 'file_url') {
        const func = (arg1, arg2) => {
          return Promise.resolve(functions[functionName](arg1, arg2));
        };
        this.environment.addFunction(new TwingFunction(functionName, func));
      }
    });

    this.environment.addFunction(new TwingFunction('create_attribute', twigAttributeFunction));
    this.environment.addFunction(
      new TwingFunction(
        'pattern_preview',
        (
          patternId: string,
          variantId: string = Pattern.DEFAULT_VARIANT_NAME,
          variables: {} = {}
        ) => {
          const cacheKey = JSON.stringify({ patternId, variantId, variables });
          if (this.cache[cacheKey]) {
            return Promise.resolve(this.cache[cacheKey]);
          }
          return new Promise(resolve => {
            renderPatternPreview(patternId, variantId, variables).then(output => {
              this.cache[cacheKey] = output;
              resolve(output);
            });
          });
        }
      )
    );
    this.environment.addFunction(new TwingFunction('ws_itok', twigItok));
    this.environment.addFunction(new TwingFunction('file_url', twigFileUrl));
    this.environment.addFunction(new TwingFunction('pattern', renderPattern));
  }

  async render(id: string, include: string, variables: {}): Promise<string> {
    return this.environment.render(include, variables);
  }
}
