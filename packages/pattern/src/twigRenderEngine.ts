import {storage} from './index';
import PatternVariant from './PatternVariant';
import IRenderer from './IRenderer';
import TwigAttribute from './TwigAttribute';
import Pattern from "./Pattern";
import Field from "./Field";

let twigImpl = require('twig');
let twigNamespaces = {};
const globals: {} = {}
twigImpl.cache();

class DefaultRenderer implements IRenderer {
  render(id: string, include: string, variables: {}): string {
    const baseTemplate = `{% include "${include}" %}`;
    const template = twigImpl.twig({
      id: `template__${id}`,
      data: baseTemplate,
      namespaces: twigNamespaces,
    }).render(variables);
    return template;
  }
}

let rendererImpl: IRenderer = new DefaultRenderer();

function twigRenderPatternFunction(previewId, variantId: string, variables:{} = {}) {
  const idAry = previewId.split('___');
  if (idAry.length < 2) {
    return renderPattern(previewId, variantId, variables);
  }
  const id = previewId.split('___')[1];
  var opts = Object.assign({}, {}, {
    ref: id,
    allowInlineIncludes: true,
    rethrow: true,
  });
  const template = twigImpl.twig(opts);
  if (template !== null) {
    return template.render();
  } else {
    return 'Unable to render template';
  }
}

function twigRenderPreviewPatternFunction(previewId, variantId: string, variables: {} = {}) {
  const idAry = previewId.split('___');
  if (idAry.length < 2) {
    return renderPatternPreview(previewId, variantId, variables);
  }
  const id = idAry[1];
  var opts = Object.assign({}, {}, {
    ref: id,
    allowInlineIncludes: true,
    rethrow: true,
  });
  const template = twigImpl.twig(opts);
  if (template !== null) {
    return template.render();
  } else {
    return 'Unable to render template';
  }
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

export function addGlobal(name: string, value: {}) {
  globals[name] = value;
}

export function renderPatternPreview(patternId: string, variantId: string = Pattern.DEFAULT_VARIANT_NAME, variables: {} = {}) {
  const variant: PatternVariant = storage.loadVariant(patternId, variantId);
  if (variant == null) {
    throw new Error(`Pattern ${patternId}:${variantId} not found.`);
  }
  const patternVariables = variant.getVariables();
  const values = [];
  Object.keys(variant.fields).forEach((key) => {
    const field: Field = variant.fields[key];
    if (field.type === 'pattern') {
      const preview: {} = field.preview;
      const refPatternId: string = preview['id'];
      if (refPatternId == null) {
        throw new Error(`Missing required attribute "${patternId}.${variant.id}.fields.${field.name}:id".`);
      }
      const refVariantId: string = preview['variant'] != null ? preview['variant'] : Pattern.DEFAULT_VARIANT_NAME;
      const refSettings: {} = preview['settings'];
      const refFields: {} = preview['fields'];
      const mergedVariables = Object.assign(refSettings, refFields);
      values[key] = renderPatternPreview(refPatternId, refVariantId, mergedVariables);
    }
  });
  const mergedValues: {} = Object.assign(patternVariables, variables, values);
  return renderPattern(patternId, variantId, mergedValues);
}

export function renderPattern(patternId: string, variantId: string = Pattern.DEFAULT_VARIANT_NAME, variables: {} = {}) {
  const variant: PatternVariant = storage.loadVariant(patternId, variantId);
  if (variant == null) {
    throw new Error(`Pattern "${patternId}:${variantId}" not found.`);
  }
  const mergedValues: {} = Object.assign({'wingsuit': globals}, variables);
  return rendererImpl.render(patternId + '__' + variant.id, variant.use, mergedValues);
}

export function renderTemplate(path: string, variables: {} = {}) {
  const mergedVariables: {} = Object.assign(variables, {'wingsuit': globals});
  return rendererImpl.render(path, path, mergedVariables);
}
