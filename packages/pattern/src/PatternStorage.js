"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pattern_1 = require("./Pattern");
var fs = require("fs");
var PatternStorage = /** @class */ (function () {
    function PatternStorage() {
        this.definitions = {};
    }
    PatternStorage.prototype.loadPattern = function (patternId) {
        var definition = this.definitions['patterns'][patternId];
        if (definition == null) {
            return null;
        }
        return new Pattern_1.default(patternId, definition);
    };
    PatternStorage.prototype.loadVariant = function (patternId, variantId) {
        var pattern = this.loadPattern(patternId);
        if (pattern != null) {
            return pattern.getVariant(variantId);
        }
        return null;
    };
    PatternStorage.prototype.createDefinitionsFromFile = function (path) {
        this.definitions = JSON.parse(fs.readFileSync(path, 'utf8'));
    };
    PatternStorage.prototype.createDefinitions = function (definition) {
        this.definitions = definition;
    };
    return PatternStorage;
}());
exports.default = PatternStorage;
