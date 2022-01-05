import { storage } from './index';
import PatternVariant from './PatternVariant';
import IRenderer from './IRenderer';
import Pattern from './Pattern';
import { MultiValueTypes } from './Field';

let rendererImpl: IRenderer;

export async function setRenderer(renderer: IRenderer) {
  rendererImpl = renderer;
}

export function initializeRenderer() {
  Object.keys(storage.getTwigResources()).forEach((key) => {
    rendererImpl.addTemplate(key, storage.getTwigResources()[key]);
  });
}
export async function getPatternConfiguration(
  patternId: string,
  variantId: string = Pattern.DEFAULT_VARIANT_NAME,
  configuration: string
) {
  try {
    const variant: PatternVariant = storage.loadVariant(patternId, variantId);
    return new Promise<string>((resolve) => {
      const config = variant.getConfiguration();
      resolve(config[configuration]);
    });
  } catch (e) {
    return new Promise<string>((resolve) => {
      if (e instanceof Error) {
        // eslint-disable-next-line no-console
        console.info(`Cannot load pattern configuration. Message: ${e.message}`);
      }
      resolve('');
    });
  }
}

export function twingMapToArray(variables): string[] {
  const ary: string[] = [];
  if (variables instanceof Map) {
    variables.forEach((value) => {
      ary.push(value);
    });
  }
  return ary;
}

export async function renderPatternPreview(
  patternId: string,
  variables: {} = {},
  variantId: string = Pattern.DEFAULT_VARIANT_NAME,
  renderInfoContext: {} = {}
): Promise<string> {
  let variant: PatternVariant;
  try {
    variant = storage.loadVariant(patternId, variantId);

  } catch (err) {
    return new Promise<string>((resolve) => {
      if (err instanceof Error) {
        resolve(err.message);
      }
    });
  }
  const renderInfo = { ...variant.getRenderInfo(), ...renderInfoContext };
  const promisedPreview: Promise<string>[] = [];
  const promisedPreviewNames: string[] = [];
  let i = 0;
  Object.keys(renderInfo).forEach((key: string) => {
    promisedPreview[i] = renderPatternPreview(
      renderInfo[key].patternId,
      renderInfo[key].variables,
      renderInfo[key].variant,
      renderInfo[key]?.children || {}
    );

    promisedPreviewNames[i] = key;
    i += 1;
  });

  const patternVariables = variant.getVariables();
  if (Object.keys(promisedPreview).length !== 0) {
    return new Promise<string>((resolve) => {
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
            } else if (
              variant.getField(fieldName).multiValueType() === MultiValueTypes.field_items
            ) {
              if (previewRenderedVariables[nameKeys[0]] === undefined) {
                previewRenderedVariables[nameKeys[0]] = [];
              }
              previewRenderedVariables[nameKeys[0]][delta] = { content: promisedPreviewValues[j] };
            } else if (
              variant.getField(fieldName).multiValueType() === MultiValueTypes.single_value
            ) {
              if (previewRenderedVariables[nameKeys[0]] === undefined) {
                previewRenderedVariables[nameKeys[0]] = promisedPreviewValues[j];
              } else {
                previewRenderedVariables[nameKeys[0]] += promisedPreviewValues[j];
              }
            } else {
              previewRenderedVariables[nameKeys[0]] = `No multi value type for field: '${variant
                .getPattern()
                .getId()}:${fieldName}:${variant.getField(fieldName).multiValueType()}'`;
            }
          }
        }
        const finalVariables: {} = {
          ...patternVariables,
          ...buildBaseVariables(variables),
        };
        Object.keys(previewRenderedVariables).forEach((key) => {
          // Overwrite variables with rendered ones.
          if (finalVariables[key] !== null) {
            finalVariables[key] = previewRenderedVariables[key];
          }
        });
        renderPattern(patternId, finalVariables, variantId)
          .then((output) => {
            resolve(output);
          })
          .catch((error) => {
            resolve(error);
          });
      });
    });
  }
  return renderPattern(
    patternId,
    {
      ...patternVariables,
      ...buildBaseVariables(variables, true),
    },
    variantId
  );
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
  variables: {} = {},
  variantId: string = Pattern.DEFAULT_VARIANT_NAME
): Promise<string> {
  const variant: PatternVariant = storage.loadVariant(patternId, variantId);
  const patternVariables = variant.getVariables(false);
  const finalVariables = {
    ...patternVariables,
    ...buildBaseVariables(variables, true),
  };
  finalVariables.variant = variantId;
  variant.setRenderArgs(finalVariables);
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
