import * as path from 'path';
import {getStorage} from './index';
import Pattern from "./Pattern";
import PatternVariant from "./PatternVariant";

const namespace = require('./namespaces.test')['default'];

const renderEngine = require('./TwigRenderEngine');
getStorage().createDefinitionsFromFile(path.join(__dirname, '/../_data/patterns.json'));
renderEngine.setNamespaces(namespace);

describe('TwigRenderEngine', () => {
  describe('#renderPattern', () => {
    test('Render Pattern Card', () => {
      const output = renderEngine.renderPattern('card', 'default');
      expect(output).toEqual('Card1');
    });
  });
  describe('#renderTemplate', () => {
    test('Render Template', () => {
      renderEngine.addGlobal('global_1', 'correct');
      const output = renderEngine.renderTemplate('@molecules/tests/global.twig');
      expect(output).toMatch(/field\:correct/);
      expect(output).toMatch(/setting\:correct/);
    });
  });
  describe('#renderPreview', () => {
    test.each([
        ['global', 'default'],
        ['default_value', 'default'],
        ['pattern', 'default'],
        ['pattern_variant', 'default'],
        ['pattern_function', 'default'],
        ['pattern_preview_function', 'default'],
        ['simple', 'default'],
        ['variant', 'variant']
      ],
    )(
      "Check rendered pattern %p variant %p",
      (patternId: string, variantId: string) => {
        renderEngine.addGlobal('global_1', 'correct');
        const output = renderEngine.renderPreview(patternId, variantId);
        expect(output).toMatch(/field\:correct/);
        expect(output).toMatch(/setting\:correct/);
      }
    )
  });
});