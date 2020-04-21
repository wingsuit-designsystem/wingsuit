import { storage } from './index';
import * as path from 'path';
import PatternVariant from './PatternVariant';
import IRenderer from './IRenderer';
import Field from './Field';

let twigImpl = require('twig');

let twigNamespaces = {};
const globals: {} = {}
twigImpl.cache();

export class WebpackRenderer implements IRenderer {
  render(id: string, include: string, variables: {}): string {
    const pathAry: string[] = include.split('/')
    const n = pathAry[0].replace('@', '');
    pathAry.shift();
    const twigPath = path.join(twigNamespaces[n], pathAry.join('/'));
    const t = require(twigPath);
    return t(variables);
  }
}

class DefaultRenderer implements IRenderer {
  render(id:string, include: string, variables: {}): string {
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

function renderPreviewExtension (previewId, variantId: string, fields:{} = {}, settings:{} = {}) {
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
export function twigFunctions() {
  twigImpl.extendFunction('pattern_preview', renderPreviewExtension);
  twigImpl.extendFunction('pattern', renderPreviewExtension);
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

function getSettingValues(variant: PatternVariant) {
  const values = {};
  Object.keys(variant.settings).forEach((key) => {
    values[key] = variant.settings[key].preview;
  });
  return values;
}

function getFieldValues(variant: PatternVariant) {
  const values = {};
  Object.keys(variant.fields).forEach((key) => {
    const field: Field = variant.fields[key];
    if (field.type !== 'pattern') {
      values[key] = field.preview;
    } else {
      const preview: {} = field.preview;
      const patternId: string = preview['id'];
      if (patternId == null) {
        throw new Error(`Pattern preview id of field ${field.name} is required.`);
      }
      const variantId: string = preview['variant'] != null ? preview['variant'] : 'default';
      const settings: {} = preview['settings'];
      const fields: {} = preview['fields'];
      values[key] = renderPreview(patternId, variantId, settings, fields);
    }
  });
  return values;
}

export function renderPreview(patternId: string, variantId: string, settings: {}, fields: {}) {
  const variant: PatternVariant = storage.loadVariant(patternId, variantId);
  if (variant == null) {
    throw new Error(`Pattern variant ${patternId} ${variantId} not found.`);
  }
  const settingValues: {} = getSettingValues(variant);
  const fieldValues: {} = getFieldValues(variant);
  const mergedSettingValues: {} = Object.assign(settingValues, settings);
  const mergedFieldValues: {} = Object.assign(fieldValues, fields);
  return renderPattern(patternId, variantId, mergedSettingValues, mergedFieldValues);
}

export function renderPattern(patternId: string, variantId: string, settings: {} = {}, fields: {} = {}) {
  const variant: PatternVariant = storage.loadVariant(patternId, variantId);
  if (variant == null) {
    throw new Error(`Pattern variant ${patternId} ${variantId} not found.`);
  }
  const variables: {} = Object.assign(settings, fields, {'wingsuit': globals});
  return rendererImpl.render(patternId + '__' + variantId, variant.use, variables);
}

export function renderTemplate(path: string, variables: {} = {}) {
  const mergedVariables: {} = Object.assign(variables, {'wingsuit': globals});
  return rendererImpl.render(path, path, mergedVariables);
}
