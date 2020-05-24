import {storage} from './index';
import PatternVariant from './PatternVariant';
import IRenderer from './IRenderer';
import Pattern from './Pattern';

let rendererImpl: IRenderer;

export function setRenderer(renderer: IRenderer) {
  rendererImpl = renderer;
}

export async function renderPatternPreview(
  patternId: string,
  variantId: string = Pattern.DEFAULT_VARIANT_NAME,
  variables: {} = {}
): Promise<string> {

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
  const promisedPreview: Promise<string>[] = [];
  const promisedPreviewNames: string[] = [];
  let i = 0;
  Object.keys(patternPreview).forEach((key: string) => {
    promisedPreview[i] = renderPatternPreview(patternPreview[key].patternId, patternPreview[key].variant, patternPreview[key].variables);
    promisedPreviewNames[i] = key;
    i += 1;
  });

  if (Object.keys(promisedPreview).length !== 0) {
    return new Promise<string>((resolve, refuse) => {
      Promise.all(promisedPreview)
        .then((promisedPreviewValues: string[]) => {
          const previewRenderedVariables = {};
          for (let j = 0; j < promisedPreviewValues.length; j += 1) {
            previewRenderedVariables[promisedPreviewNames[j]] = promisedPreviewValues[j];
          }
          const mergedValues: {} = Object.assign(patternVariables, passedVariables, previewRenderedVariables);
          renderPattern(patternId, variantId, mergedValues).then((output)=> {
            resolve(output);
          });
        });
    });
  }
  const mergedValues: {} = Object.assign(patternVariables, passedVariables);
  return renderPattern(patternId, variantId, mergedValues);

}
export async function renderPattern(
  patternId: string,
  variantId: string = Pattern.DEFAULT_VARIANT_NAME,
  variables: {} = {}
): Promise<string> {

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
  const mergedVariables = Object.assign(storage.getGlobals(), passedVariables)
  return rendererImpl.render(
    `${patternId}__${variant.getVariant()}`,
    variant.getUse(),
    mergedVariables
  );
}

export async function renderData(path: string, template: string, variables: {} = {}) {

  rendererImpl.addTemplate(path, template);
  return renderTemplate(path, variables);
}

export async function renderTemplate(path: string, variables: {} = {}) {
  const mergedVariables = Object.assign(storage.getGlobals(), variables);
  return rendererImpl.render(path, path, mergedVariables);
}
