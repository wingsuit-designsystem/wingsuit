"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pattern_1 = require("./Pattern");
var PatternVariant = /** @class */ (function () {
    function PatternVariant(pattern, variant, use, label, description) {
        this._fields = [];
        this._settings = [];
        this._pattern = pattern;
        this._variant = variant;
        this._label = label;
        this._use = use;
        this._description = description;
    }
    Object.defineProperty(PatternVariant.prototype, "use", {
        get: function () {
            return this._use;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatternVariant.prototype, "label", {
        get: function () {
            return this._label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatternVariant.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatternVariant.prototype, "pattern", {
        get: function () {
            return this._pattern;
        },
        set: function (pattern) {
            this._pattern = pattern;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatternVariant.prototype, "variant", {
        get: function () {
            return this._variant;
        },
        set: function (value) {
            this._variant = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatternVariant.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        set: function (fields) {
            this._fields = fields;
        },
        enumerable: true,
        configurable: true
    });
    PatternVariant.prototype.addField = function (field) {
        this._fields[field.name] = field;
    };
    PatternVariant.prototype.getField = function (name) {
        return this._fields[name];
    };
    Object.defineProperty(PatternVariant.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        set: function (value) {
            this._settings = value;
        },
        enumerable: true,
        configurable: true
    });
    PatternVariant.prototype.getSetting = function (name) {
        return this._settings[name];
    };
    PatternVariant.prototype.addSetting = function (setting) {
        var name = setting.name;
        this._settings[name] = setting;
    };
    PatternVariant.prototype.getVariables = function () {
        var _this = this;
        var values = {};
        Object.keys(this.settings).forEach(function (key) {
            values[key] = _this.settings[key].preview;
        });
        Object.keys(this.fields).forEach(function (key) {
            var field = _this.fields[key];
            values[key] = field.preview;
        });
        if (this.variant !== Pattern_1.default.DEFAULT_VARIANT_NAME) {
            values['variant'] = this.variant;
        }
        return values;
    };
    return PatternVariant;
}());
exports.default = PatternVariant;
