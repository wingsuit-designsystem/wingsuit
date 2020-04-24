import * as path from 'path';
import {getStorage} from '../src';

const namespace = require('../__int_tests__/namespaces')['default'];

const renderEngine = require('../src/twigRenderEngine');
getStorage().createDefinitionsFromFile(path.join(__dirname, '/_data/patterns.json'));
renderEngine.setNamespaces(namespace);
renderEngine.twigFunctions();
describe('TwigRenderEngine', () => {
  describe('#renderPattern', () => {
    test('Render Pattern Card', () => {
      const output = renderEngine.renderPattern('card', 'default');
      expect(output).toEqual('Card1');
    });
  });
  describe('#render complex pattern', () => {
    test('Render Pattern Card', () => {
      const output = renderEngine.renderPattern('render');
      expect(output).toEqual('render');
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
        ['global', '__default'],
        ['default_value', '__default'],
        ['pattern', '__default'],
        ['pattern_variant', 'default'],
        ['pattern_function', '__default'],
        ['pattern_preview_function', '__default'],
        ['simple', '__default'],
        ['variant', 'variant']
      ],
    )(
      "Check rendered pattern %p variant %p",
      (patternId: string, variantId: string) => {
        renderEngine.addGlobal('global_1', 'correct');
        const output = renderEngine.renderPatternPreview(patternId, variantId);
        expect(output).toMatch(/field\:correct/);
        expect(output).toMatch(/setting\:correct/);
      }
    )
  });
});