import {storage} from './index';
import PatternVariant from './PatternVariant';
import IRenderer from './IRenderer';
import Pattern from './Pattern';

let rendererImpl: IRenderer;

export function setRenderer(renderer: IRenderer) {
  rendererImpl = renderer;
}
export function renderPatternPreview(
  patternId: string,
  variantId: string = Pattern.DEFAULT_VARIANT_NAME,
  variables: {} = {}
) {

  let passedVariables = variables;
  // Variables are passed as Map in Twing.
  if (variables instanceof Map) {
    const obj = {};
    variables.forEach((value, key) => (obj[key] = value));
    passedVariables = obj;
  }

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
  const mergedValues: {} = Object.assign(patternVariables, passedVariables, values);
  return renderPattern(patternId, variantId, mergedValues);
}

export function renderPattern(
  patternId: string,
  variantId: string = Pattern.DEFAULT_VARIANT_NAME,
  variables: {} = {}
) {
  let passedVariables = variables;
  // Variables are passed as Map in Twing.
  if (variables instanceof Map) {
    const obj = {};
    variables.forEach((value, key) => (obj[key] = value));
    passedVariables = obj;
  }
  const variant: PatternVariant = storage.loadVariant(patternId, variantId);
  if (variant == null) {
    throw new Error(`Pattern "${patternId}:${variantId}" not found.`);
  }
  const mergedVariables = Object.assign(passedVariables, {'wingsuit': storage.getGlobals()})
  return rendererImpl.render(
    `${patternId}__${variant.getVariant()}`,
    variant.getUse(),
    mergedVariables
  );
}

export function renderData(path: string, data: {}, variables: {} = {}) {
  storage.addTwig(path, data);
  return renderTemplate(path, variables);
}

export function renderTemplate(path: string, variables: {} = {}) {
  const mergedVariables = Object.assign(variables, storage.getGlobals())
  return rendererImpl.render(path, path, mergedVariables);
}
