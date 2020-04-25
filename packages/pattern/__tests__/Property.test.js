"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Field_1 = require("../src/Field");
describe("Property test", function () {
    test('Faker should print a word.', function () {
        var field = new Field_1.default("test", "test", "Test", "", { 'faker': { 'property': 'name.lastName' } });
        var output = field.getPreview();
        expect(output).not.toBeNull();
    });
    test('Invalid faker configuration.', function () {
        var field = new Field_1.default("test", "test", "Test", "", { 'faker': { 'property': 'nams.lastName' } });
        var output = field.getPreview();
        expect(output).toBe('Invalid faker configuration \"{{nams.lastName}}\". Invalid module: nams' +
            '');
    });
});
