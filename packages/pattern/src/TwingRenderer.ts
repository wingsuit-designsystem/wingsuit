import { TwingLoaderArray } from 'twing';
import { TwingLoaderInterface } from 'twing/dist/types/lib/loader-interface';
import IRenderer from './IRenderer';
import { twigAttributeFunction, twigItok, twigFileUrl, twigUuid, without } from './twigExtensions';
import { renderPattern, renderPatternPreview, getPatternConfiguration } from './twigRenderEngine';
import { storage } from './index';
import Pattern from './Pattern';

const { TwingEnvironment, TwingFunction, TwingFilter } = require('twing');
const twingFilters = require('twing-drupal-filters');

export class TwingRenderer implements IRenderer {
  private environment;

  private initializeEnvironment = false;

  private filters: {} = {
    without: (arg1, ...args) => {
      return Promise.resolve(without(arg1, ...args));
    },
  };

  private functions: {} = {
    ws_itok: twigItok,
    uuid: twigUuid,
    file_url: twigFileUrl,
    pattern: renderPattern,
    create_attribute: twigAttributeFunction,
    pattern_configuration: getPatternConfiguration,
    pattern_preview: (
      patternId: string,
      variables: {} = {},
      variantId: string = Pattern.DEFAULT_VARIANT_NAME
    ) => {
      return new Promise((resolve) => {
        renderPatternPreview(patternId, variables, variantId).then((output) => {
          resolve(output);
        });
      });
    },
  };

  addFilter(name, func) {
    this.filters[name] = func;
  }

  addFunction(name, func) {
    this.functions[name] = func;
  }

  getEnvironment() {
    return this.environment;
  }

  addTemplate(path, template) {
    this.environment.getLoader().setTemplate(path, template);
  }

  setLoader(loader: TwingLoaderInterface) {
    this.environment.setLoader(loader);
  }

  constructor() {
    const loader = new TwingLoaderArray(storage.getTwigResources());
    this.environment = new TwingEnvironment(loader, { autoescape: false, debug: false });
  }

  private initialize() {
    twingFilters(this.environment);
    Object.keys(this.functions).forEach((key) => {
      this.environment.addFunction(new TwingFunction(key, this.functions[key]));
    });
    Object.keys(this.filters).forEach((key) => {
      this.environment.addFilter(new TwingFilter(key, this.filters[key]));
    });
  }

  async render(id: string, include: string, variables: {}): Promise<string> {
    if (this.initializeEnvironment === false) {
      this.initializeEnvironment = true;
      this.initialize();
    }
    const loader = new TwingLoaderArray(storage.getTwigResources());
    this.environment.setLoader(loader);
    return this.environment.render(include, variables);
  }
}
