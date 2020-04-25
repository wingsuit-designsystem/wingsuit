"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var src_1 = require("../src");
var namespace = require('../__int_tests__/namespaces')['default'];
var renderEngine = require('../src/twigRenderEngine');
src_1.getStorage().createDefinitionsFromFile(path.join(__dirname, '/_data/patterns.json'));
renderEngine.setNamespaces(namespace);
renderEngine.twigFunctions();
describe('TwigRenderEngine', function () {
    describe('#renderPattern', function () {
        test('Render Pattern Card', function () {
            var output = renderEngine.renderPattern('card', 'default');
            expect(output).toEqual('Card1');
        });
    });
    describe('#render complex pattern', function () {
        test('Render Pattern Card', function () {
            var output = renderEngine.renderPattern('render');
            expect(output.trim()).toEqual('render');
        });
    });
    describe('#renderTemplate', function () {
        test('Render Template', function () {
            renderEngine.addGlobal('global_1', 'correct');
            var output = renderEngine.renderTemplate('@molecules/tests/global.twig');
            expect(output).toMatch(/field\:correct/);
            expect(output).toMatch(/setting\:correct/);
        });
    });
    describe('#renderPreview', function () {
        test.each([
            ['global', '__default'],
            ['default_value', '__default'],
            ['pattern', '__default'],
            ['pattern_variant', 'default'],
            ['pattern_function', '__default'],
            ['pattern_preview_function', '__default'],
            ['simple', '__default'],
            ['variant', 'variant']
        ])("Check rendered pattern %p variant %p", function (patternId, variantId) {
            renderEngine.addGlobal('global_1', 'correct');
            var output = renderEngine.renderPatternPreview(patternId, variantId);
            expect(output).toMatch(/field\:correct/);
            expect(output).toMatch(/setting\:correct/);
        });
    });
});
