import {twigAttributeFunction, twigItok} from "./twigExtensions";
import IRenderer from "./IRenderer";
import {renderPatternPreview, renderPattern} from "./twigRenderEngine";
import { storage } from './index';

const twig = require('twig');
const twigDrupal = require('twig-drupal-filters');

export class TwigRenderer implements IRenderer {
  constructor() {
    twig.cache();
    twigDrupal(twig);
    twig.extendFunction('pattern_preview', renderPatternPreview);
    twig.extendFunction('pattern', renderPattern);
    twig.extendFunction('create_attribute', twigAttributeFunction);
    twig.extendFunction('ws_itok', twigItok);
  }

  render(id: string, include: string, variables: {}): string {
    const template = storage.findTwigByNamespace(include);
    if (template !== null) {
      // @ts-ignore
      return template(variables);
    } else {
      return `Template ${id} ${include} not loaded. Check require.context in your configure.js`;
    }
  }
}