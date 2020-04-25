"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PatternVariant_1 = require("./PatternVariant");
var Setting_1 = require("./Setting");
var Field_1 = require("./Field");
var Pattern = /** @class */ (function () {
    function Pattern(id, definition) {
        this._definition = {};
        this._patternVariants = [];
        this._id = id;
        this._label = definition['label'];
        this._description = definition['description'];
        this._use = definition['use'];
        this._definition = definition;
        this.initializeVariants();
    }
    Object.defineProperty(Pattern.prototype, "use", {
        get: function () {
            return this._use;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pattern.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pattern.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pattern.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pattern.prototype, "defaultVariant", {
        get: function () {
            return this._defaultVariant;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pattern.prototype, "patternVariants", {
        get: function () {
            return this._patternVariants;
        },
        enumerable: true,
        configurable: true
    });
    Pattern.prototype.getVariant = function (id) {
        if (id === void 0) { id = Pattern.DEFAULT_VARIANT_NAME; }
        if (id == '') {
            id = Pattern.DEFAULT_VARIANT_NAME;
        }
        return this._patternVariants[id];
    };
    Pattern.prototype.initializeVariants = function () {
        var variantKeys = [];
        var settings = this._definition['settings'] != null ? this._definition['settings'] : {};
        var fields = this._definition['fields'] != null ? this._definition['fields'] : {};
        var variantsDefinitions = this._definition['variants'] != null ? this._definition['variants'] : {};
        Object.keys(variantsDefinitions).forEach(function (key) {
            variantKeys.push(key);
        });
        if (variantKeys.length == 0) {
            variantKeys.push(Pattern.DEFAULT_VARIANT_NAME);
        }
        var _loop_1 = function (i) {
            var variantKey = variantKeys[i];
            var variantDefinition = variantsDefinitions[variantKey] != null ? variantsDefinitions[variantKey] : {};
            var label = variantDefinition != null ? this_1.label + ': ' + variantDefinition['label'] : this_1.label;
            var use = variantDefinition['use'] != null ? variantDefinition['use'] : this_1.use;
            var description = variantDefinition != null ? variantDefinition['description'] : this_1.description;
            var variant = new PatternVariant_1.default(this_1._id, variantKey, use, label, description);
            if (i == 0) {
                this_1._defaultVariant = variant;
            }
            Object.keys(settings).forEach(function (key) {
                var setting = new Setting_1.default(key, settings[key]['type'], settings[key]['label'], settings[key]['description'], settings[key]['preview']);
                setting.options = settings[key]['options'];
                if (settings[key]['default_value'] != null) {
                    setting.preview = settings[key]['default_value'];
                }
                if (settings[key]['value'] != null) {
                    setting.preview = settings[key]['value'];
                }
                variant.addSetting(setting);
            });
            Object.keys(fields).forEach(function (key) {
                var field = new Field_1.default(key, fields[key]['type'], fields[key]['label'], fields[key]['description'], fields[key]['preview']);
                variant.addField(field);
            });
            if (variantDefinition != null) {
                if (variantDefinition['settings'] != null) {
                    Object.keys(variantDefinition['settings']).forEach(function (key) {
                        var setting = variant.getSetting(key);
                        setting.preview = variantDefinition['settings'][key];
                        setting.enable = false;
                    });
                }
                if (variantDefinition['fields'] != null) {
                    Object.keys(variantDefinition['fields']).forEach(function (key) {
                        var field = variant.getField(key);
                        field.preview = variantDefinition['fields'][key];
                    });
                }
            }
            this_1._patternVariants[variantKey] = variant;
        };
        var this_1 = this;
        for (var i = 0; i < variantKeys.length; i++) {
            _loop_1(i);
        }
    };
    Pattern.DEFAULT_VARIANT_NAME = '__default';
    return Pattern;
}());
exports.default = Pattern;
