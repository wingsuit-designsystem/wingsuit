import {twigAttributeFunction} from "./twigExtensions";

const twig = require('twig');

export class StoredTwigRenderer implements IRenderer {
  constructor() {
    twig.extendFunction('pattern_preview', renderPatternPreview);
    twig.extendFunction('pattern', renderPatternPreview);
    twig.extendFunction('attributes_object', twigAttributeFunction);
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