import { storage } from './index';
import PatternVariant from './PatternVariant';
import IRenderer from './IRenderer';
import TwigAttribute from './TwigAttribute';
import Pattern from './Pattern';

let twigImpl = require('twig');

let twigNamespaces = {};
twigImpl.cache();

export class DefaultRenderer implements IRenderer {
  render(id: string, include: string, variables: {}): string {
    const baseTemplate = `{% include "${include}" %}`;
    const template = twigImpl
      .twig({
        id: `template__${id}`,
        data: baseTemplate,
        namespaces: twigNamespaces,
      })
      .render(variables);

    return template;
  }
}

export class StoredTwigRenderer implements IRenderer {
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

let rendererImpl: IRenderer = new DefaultRenderer();

function twigRenderPatternFunction(previewId, variantId: string, variables: {} = {}) {
  const idAry = previewId.split('___');
  if (idAry.length < 2) {
    return renderPattern(previewId, variantId, variables);
  }
  const id = previewId.split('___')[1];
  const opts = { ref: id, allowInlineIncludes: true, rethrow: true };
  const template = twigImpl.twig(opts);
  if (template !== null) {
    return template.render();
  }
  return 'Unable to render template';
}

function twigRenderPreviewPatternFunction(previewId, variantId: string, variables: {} = {}) {
  const idAry = previewId.split('___');
  if (idAry.length < 2) {
    return renderPatternPreview(previewId, variantId, variables);
  }
  const id = idAry[1];
  const opts = { ref: id, allowInlineIncludes: true, rethrow: true };
  const template = twigImpl.twig(opts);
  if (template !== null) {
    return template.render();
  }
  return 'Unable to render template';
}

export function twigFunctions() {
  twigImpl.extendFunction('pattern_preview', twigRenderPreviewPatternFunction);
  twigImpl.extendFunction('pattern', twigRenderPatternFunction);
  twigImpl.extendFunction('attributes_object', twigAttributeFunction);
}

function twigAttributeFunction() {
  return new TwigAttribute();
}
export function setTwig(twig) {
  twigImpl = twig;
}

export function getTwig() {
  return twigImpl;
}

export function setRenderer(renderer: IRenderer) {
  rendererImpl = renderer;
}

export function setNamespaces(namespaces: {}) {
  twigNamespaces = namespaces;
}

export function renderPatternPreview(
  patternId: string,
  variantId: string = Pattern.DEFAULT_VARIANT_NAME,
  variables: {} = {}
) {
  const variant: PatternVariant = storage.loadVariant(patternId, variantId);
  if (variant == null) {
    throw new Error(`Pattern ${patternId}:${variantId} not found.`);
  }
  const patternVariables = variant.getVariables();
  const patternPreview = variant.getPreviewPatterns()
  const values = [];
  Object.keys(patternPreview).forEach((key: string) => {
    values[key] = renderPatternPreview(patternPreview[key].patternId, patternPreview[key].variant, patternPreview[key].variables);
  });
  const mergedValues: {} = Object.assign(patternVariables, variables, values);
  return renderPattern(patternId, variantId, mergedValues);
}

export function renderPattern(
  patternId: string,
  variantId: string = Pattern.DEFAULT_VARIANT_NAME,
  variables: {} = {}
) {
  const variant: PatternVariant = storage.loadVariant(patternId, variantId);
  if (variant == null) {
    throw new Error(`Pattern "${patternId}:${variantId}" not found.`);
  }
  const mergedVariables = Object.assign(variables, {'wingsuit':storage.getGlobals()})
  return rendererImpl.render(
    `${patternId}__${variant.getVariant()}`,
    variant.getUse(),
    mergedVariables
  );
}

export function renderTemplate(path: string, variables: {} = {}) {
  const mergedVariables = Object.assign(variables, {'wingsuit':storage.getGlobals()})
  return rendererImpl.render(path, path, mergedVariables);
}
