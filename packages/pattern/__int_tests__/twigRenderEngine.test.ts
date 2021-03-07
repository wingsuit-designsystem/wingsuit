import * as path from 'path';
import { TwingLoaderFilesystem } from 'twing';
import fs from 'fs';
import { storage, TwingRenderer } from '../src';

const namespaces = require('./namespaces').default;
const renderEngine = require('../src/twigRenderEngine');

const renderer = new TwingRenderer();
const loader = new TwingLoaderFilesystem();
Object.keys(namespaces).forEach(namespace => {
  loader.setPaths(namespaces[namespace], namespace);
});

renderer.setLoader(loader);
renderEngine.setRenderer(renderer);

storage.createDefinitions(
  JSON.parse(fs.readFileSync(path.join(__dirname, '/_data/patterns.json')))
);

describe('TwigRenderEngine', () => {
  test('Render Pattern Card', async () => {
    const output = await renderEngine.renderPattern('card', 'default');
    expect(output).toEqual('Card1');
  });
  test('Render Pattern render', async () => {
    const output = await renderEngine.renderPattern('render');
    expect(output.trim()).toEqual('render');
  });
  test('Render Template', async () => {
    storage.addGlobal('global_1', 'correct');
    const output = await renderEngine.renderTemplate(
      '@molecules/tests/global.twig',
      storage.getGlobals()
    );
    expect(output).toMatch(/field:correct/);
    expect(output).toMatch(/setting:correct/);
  });
  test.each([
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
