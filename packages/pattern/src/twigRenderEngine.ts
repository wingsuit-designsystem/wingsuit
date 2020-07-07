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
        const finalVariables: {} = {
          ...patternVariables,
          ...buildBaseVariables(variables),
          ...previewRenderedVariables,
        };
        renderPattern(patternId, variantId, finalVariables)
          .then(output => {
            resolve(output);
          })
          .catch(error => {
            refuse(error);
          });
      });
    });
  }
  return renderPattern(patternId, variantId, {
    ...patternVariables,
    ...buildBaseVariables(variables, false),
  });
}
function buildBaseVariables(variables, addGlobals = true) {
  let passedVariables = variables;
  // Variables are passed as Map in Twing.
  if (variables instanceof Map) {
    const obj = {};
    variables.forEach((value, key) => {
      obj[key] = value;
    });
    passedVariables = obj;
  }
  if (addGlobals) {
    return { ...storage.getGlobals(), ...passedVariables };
  }
  return passedVariables;
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
  const finalVariables = buildBaseVariables(variables);
  return rendererImpl.render(
    `${patternId}__${variant.getVariant()}`,
    variant.getUse(),
    finalVariables
  );
}

export function renderData(path: string, template: string, variables: {} = {}) {
  rendererImpl.addTemplate(path, template);
  return renderTemplate(path, variables);
}

export function renderTemplate(path: string, variables: {} = {}) {
  const finalVariables = { ...storage.getGlobals(), ...variables };
  return rendererImpl.render(path, path, finalVariables);
}
