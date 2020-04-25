"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var PatternStorage_1 = require("../src/PatternStorage");
describe("Pattern parsing", function () {
    var storage = new PatternStorage_1.default();
    beforeEach(function () {
        storage.createDefinitionsFromFile(path.join(__dirname, '_data/patterns.json'));
    });
    test.each([['blank', 1, 0, 0], ['card', 2, 3, 2]])("pattern %p should have %p variants, %p fields and %p settings.", function (pattern_id, variantsCount, fieldsCount, settingsCount) {
        var pattern = storage.loadPattern(pattern_id);
        expect(pattern.getLabel()).not.toBeNull();
        expect(pattern.getId()).not.toBeNull();
        expect(Object.keys(pattern.getPatternVariants()).length).toEqual(variantsCount);
        var defaultVariant = pattern.getDefaultVariant();
        expect(defaultVariant.getLabel()).not.toBeNull();
        expect(settingsCount).toEqual(Object.keys(defaultVariant.getSettings()).length);
        expect(fieldsCount).toEqual(Object.keys(defaultVariant.getFields()).length);
    });
});
