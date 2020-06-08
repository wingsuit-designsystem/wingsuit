import { storage } from './index';
import PatternVariant from './PatternVariant';
import IRenderer from './IRenderer';
import Pattern from './Pattern';

let rendererImpl: IRenderer;

export async function setRenderer(renderer: IRenderer) {
  rendererImpl = renderer;
}

export async function renderPatternPreview(
  patternId: string,
  variantId: string = Pattern.DEFAULT_VARIANT_NAME,
  variables: {} = {}
): Promise<string> {

  const variant: PatternVariant = storage.loadVariant(patternId, variantId);
  if (variant == null) {
    throw new Error(`Pattern ${patternId}:${variantId} not found.`);
  }

  const previewPatterns = variant.getPreviewPatterns();
  const promisedPreview: Promise<string>[] = [];
  const promisedPreviewNames: string[] = [];
  let i = 0;
  Object.keys(previewPatterns).forEach((key: string) => {
    promisedPreview[i] = renderPatternPreview(
      previewPatterns[key].patternId,
      previewPatterns[key].variant,
      previewPatterns[key].variables
    );
    promisedPreviewNames[i] = key;
    i += 1;
  });

  const patternVariables = variant.getVariables();
  if (Object.keys(promisedPreview).length !== 0) {
    return new Promise<string>((resolve, refuse) => {
      Promise.all(promisedPreview).then((promisedPreviewValues: string[]) => {
        const previewRenderedVariables = {};
        for (let j = 0; j < promisedPreviewValues.length; j += 1) {
          previewRenderedVariables[promisedPreviewNames[j]] = promisedPreviewValues[j];
          }
          const mergedValues: {} = Object.assign(
          patternVariables,
          previewRenderedVariables
        );
        renderPattern(patternId, variantId, mergedValues)
          .then((output) => {
            resolve(output);
          })
          .catch((error) => {
            refuse(error);
          });
      });
    });
  }
  const copyVariables = { ...variables };
  const mergedValues: {} = Object.assign(patternVariables, copyVariables);
  return renderPattern(patternId, variantId, mergedValues);
}

export async function renderPattern(
  patternId: string,
  variantId: string = Pattern.DEFAULT_VARIANT_NAME,
  variables: {} = {}
): Promise<string> {
  const variant: PatternVariant = storage.loadVariant(patternId, variantId);
  if (variant == null) {
    throw new Error(`Pattern "${patternId}:${variantId}" not found.`);
  }
  const copy = { ...storage.getGlobals() };
  const mergedVariables = Object.assign(copy, variables);
  return rendererImpl.render(
    `${patternId}__${variant.getVariant()}`,
    variant.getUse(),
    mergedVariables
  );
}

export function renderData(path: string, template: string, variables: {} = {}) {
  rendererImpl.addTemplate(path, template);
  return renderTemplate(path, variables);
}

export function renderTemplate(path: string, variables: {} = {}) {
  const copy = { ...storage.getGlobals() };
  const mergedVariables = Object.assign(copy, variables);
  return rendererImpl.render(path, path, mergedVariables);
}
