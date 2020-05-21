import IRenderer from "./IRenderer";
import {TwingNamespaceLoader} from "./TwingNamespaceLoader";
import {twigAttributeFunction, twigItok, twigFileUrl} from "./twigExtensions";
import {renderPattern, renderPatternPreview} from "./twigRenderEngine";

const {TwingEnvironment, TwingFilter, TwingFunction} = require('twing');
const filters = require('twig-drupal-filters/filters');
const functions = require('twig-drupal-filters/functions');

export class TwingRenderer implements IRenderer {
  private environment;

  constructor() {
    const loader = new TwingNamespaceLoader({});
    this.environment = new TwingEnvironment(loader, {autoescape: false});

    Object.keys(filters).forEach((filterName) => {

      const filter = filters[filterName];
      this.environment.addFilter(new TwingFilter(filterName, filter));

    });
    Object.keys(functions).forEach((functionName) => {
      if (functionName !== 'file_url') {
        const func = functions[functionName];
        this.environment.addFunction(new TwingFunction(functionName, func));
      }
    })
    this.environment.addFunction(new TwingFunction('create_attribute', twigAttributeFunction));
    this.environment.addFunction(new TwingFunction('pattern_preview', renderPatternPreview));
    this.environment.addFunction(new TwingFunction('ws_itok', twigItok));
    this.environment.addFunction(new TwingFunction('file_url', twigFileUrl));
    this.environment.addFunction(new TwingFunction('pattern', renderPattern));

  }

  render(id: string, include: string, variables: {}): string {
    return this.environment.render(include, variables);
  }
}