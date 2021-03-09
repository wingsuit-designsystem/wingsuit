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

  addTemplate(path, template) {
    this.environment.getLoader().setTemplate(path, template);
  }

  setLoader(loader: TwingLoaderInterface) {
    this.environment.setLoader(loader);
  }

  constructor() {
    const loader = new TwingLoaderArray(storage.getTwigResources());
    this.environment = new TwingEnvironment(loader, { autoescape: false, debug: false });
    twingFilters(this.environment);
    const withoutFilter = (arg1, ...args) => {
      return Promise.resolve(without(arg1, ...args));
    };
    this.environment.addFunction(new TwingFunction('create_attribute', twigAttributeFunction));
    this.environment.addFilter(new TwingFilter('without', withoutFilter));
    this.environment.addFunction(
      new TwingFunction(
        'pattern_preview',
        (
          patternId: string,
          variables: {} = {},
          variantId: string = Pattern.DEFAULT_VARIANT_NAME
        ) => {
          return new Promise((resolve) => {
            renderPatternPreview(patternId, variables, variantId).then((output) => {
              resolve(output);
            });
          });
        }
      )
    );
    this.environment.addFunction(new TwingFunction('ws_itok', twigItok));
    this.environment.addFunction(new TwingFunction('uuid', twigUuid));

    this.environment.addFunction(new TwingFunction('file_url', twigFileUrl));
    this.environment.addFunction(new TwingFunction('pattern', renderPattern));
    this.environment.addFunction(
      new TwingFunction('pattern_configuration', getPatternConfiguration)
    );
  }

  async render(id: string, include: string, variables: {}): Promise<string> {
    return this.environment.render(include, variables);
  }
}
