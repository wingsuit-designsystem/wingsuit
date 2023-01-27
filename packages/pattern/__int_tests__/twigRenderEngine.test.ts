import * as path from 'path';
import { TwingLoaderFilesystem, TwingEnvironment } from 'twing';
import fs from 'fs';
import { init } from './defaultEnvironment';

import { IRenderer, PatternVariant, storage } from '../src';

class TwingRenderer implements IRenderer {
  async renderVariant(variant: PatternVariant, variables: any): Promise<string> {
    return environment.render(variant.getPattern().getUse(), variables);
  }
}

const namespaces = require('./namespaces').default;
const renderEngine = require('../src/twigRenderEngine');

const loader = new TwingLoaderFilesystem();
const environment = new TwingEnvironment(loader);
init(environment);
const renderer = new TwingRenderer();

Object.keys(namespaces).forEach((namespace) => {
  loader.setPaths(namespaces[namespace], namespace);
});

renderEngine.setRenderer(renderer);

storage.createDefinitions(
  JSON.parse(fs.readFileSync(path.join(__dirname, '/_data/patterns.json'))).patterns
);

describe('TwigRenderEngine', () => {
  test('Render Pattern Card', async () => {
    const output = await renderEngine.renderPattern('card', {}, 'default');
    expect(output).toEqual('Card1');
  });

  test('Render Pattern render', async () => {
    const output = await renderEngine.renderPattern('render');
    expect(output.trim()).toEqual('render');
  });

  test('Render Template', async () => {
    storage.addGlobal('global_1', 'correct');
    const output = await environment.render('@molecules/tests/global.twig', storage.getGlobals());

    expect(output).toMatch(/field:correct/);
    expect(output).toMatch(/setting:correct/);
  });
  test.each([
    ['pr_root', '__default'],
    ['simple_extend', '__default'],
    ['configuration', 'variant'],
    ['patterns_field_items', '__default'],
    ['patterns_single_value', '__default'],
    ['patterns_items', '__default'],
    ['global', '__default'],
    ['default_value', '__default'],
    ['pattern', '__default'],
    ['pattern_variant', 'default'],
    ['pattern_function', '__default'],
    ['pattern_preview_function', '__default'],
    ['simple', '__default'],
    ['variant', 'variant'],
  ])('Render pattern %p in variant %p', async (patternId: string, variantId: string) => {
    storage.addGlobal('global_1', 'correct');

    const output = await renderEngine.renderPatternPreview(patternId, {}, variantId);
    expect(output).toMatch(/field:correct/);
    expect(output).toMatch(/setting:correct/);
  });
});
