"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var PatternStorage_1 = require("../src/PatternStorage");
var Pattern_1 = require("../src/Pattern");
var PatternVariant_1 = require("../src/PatternVariant");
describe('PatternStorage', function () {
    var storage = null;
    beforeEach(function () {
        storage = new PatternStorage_1.default();
    });
    describe('#createDefinitionsFromFile', function () {
        test('Load Pattern Card', function () {
            storage.createDefinitionsFromFile(path.join(__dirname, '_data/patterns.json'));
            var pattern = storage.loadPattern('card');
            expect(pattern).toBeInstanceOf(Pattern_1.default);
        });
        test('Load Card Variant', function () {
            storage.createDefinitionsFromFile(path.join(__dirname, '_data/patterns.json'));
            var variant = storage.loadVariant('card', 'default');
            expect(variant).toBeInstanceOf(PatternVariant_1.default);
        });
    });
});
