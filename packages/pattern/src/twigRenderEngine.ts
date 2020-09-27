import { storage } from './index';
import PatternVariant from './PatternVariant';
import IRenderer from './IRenderer';
import Pattern from './Pattern';
import { MultiValueTypes } from './Field';

let rendererImpl: IRenderer;

export async function setRenderer(renderer: IRenderer) {
  rendererImpl = renderer;
}
export async function getPatternConfiguration(
  patternId: string,
  variantId: string = Pattern.DEFAULT_VARIANT_NAME
) {
  const variant: PatternVariant = storage.loadVariant(patternId, variantId);
  if (variant == null) {
    throw new Error(`Pattern ${patternId}:${variantId} not found.`);
  }

}

export function twingMapToArray(variables): string[] {
  const ary: string[] = [];
  if (variables instanceof Map) {
    variables.forEach((value, key) => {
      ary.push(value);
    });
  }
  return ary;
}
export async function renderPatternPreview(
  patternId: string,
  variantId: string = Pattern.DEFAULT_VARIANT_NAME,
  variables: {} = {}
): Promise<string> {
  let variant: PatternVariant;
  try {
    variant = storage.loadVariant(patternId, variantId);
  } catch (err) {
    return new Promise<string>((resolve, refuse) => {
      resolve(err.message);
    });
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
          const nameKeys = promisedPreviewNames[j].split('--');
          // Handling multi value fields.
          // Multi value patterns uses key--i as field name.
          if (nameKeys.length === 1) {
            previewRenderedVariables[nameKeys[0]] = promisedPreviewValues[j];
          } else {
            const fieldName = nameKeys[0];
            const delta: number = Number.parseInt(nameKeys[1], 10);
            if (variant.getField(fieldName).multiValueType() === MultiValueTypes.items) {
              if (previewRenderedVariables[nameKeys[0]] === undefined) {
                previewRenderedVariables[nameKeys[0]] = [];
              }
              previewRenderedVariables[nameKeys[0]][delta] = promisedPreviewValues[j];
            }
            if (variant.getField(fieldName).multiValueType() === MultiValueTypes.field_items) {
              if (previewRenderedVariables[nameKeys[0]] === undefined) {
                previewRenderedVariables[nameKeys[0]] = [];
              }
              previewRenderedVariables[nameKeys[0]][delta] = { content: promisedPreviewValues[j] };
            }
            if (variant.getField(fieldName).multiValueType() === MultiValueTypes.single_value) {
              if (previewRenderedVariables[nameKeys[0]] === undefined) {
                previewRenderedVariables[nameKeys[0]] = promisedPreviewValues[j];
              } else {
                previewRenderedVariables[nameKeys[0]] += promisedPreviewValues[j];
              }
            }
          }
        }
        const finalVariables: {} = {
          ...patternVariables,
          ...buildBaseVariables(variables),
          ...previewRenderedVariables,
        };
        renderPattern(patternId, variantId, finalVariables)
          .then((output) => {
            resolve(output);
          })
          .catch((error) => {
            resolve(error);
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
