import { twigAttributeFunction, twigItok, twigUuid } from './twigExtensions';
import IRenderer from './IRenderer';
import { renderPatternPreview, renderPattern } from './twigRenderEngine';
import { storage } from './index';

const twig = require('twig');
const twigDrupal = require('twig-drupal-filters');

export class TwigRenderer implements IRenderer {
  addTemplate(path, data) {}

  constructor() {
    twig.cache();
    twigDrupal(twig);
    twig.extendFunction('pattern_preview', renderPatternPreview);
    twig.extendFunction('pattern', renderPattern);
    twig.extendFunction('create_attribute', twigAttributeFunction);
    twig.extendFunction('ws_itok', twigItok);
    twig.extendFunction('uuid', twigUuid);
  }

  render(id: string, include: string, variables: {}): Promise<string> {
    const template = storage.findTwigByNamespace(include);
    if (template !== null) {
      // @ts-ignore
      return new Promise((resolve) => {
        resolve(template(variables));
      });
    }
    return new Promise((resolve) => {
      resolve(`Template ${id} ${include} not loaded. Check require.context in your configure.js`);
    });
  }
}
