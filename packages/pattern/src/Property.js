"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require('faker');
var Property = /** @class */ (function () {
    function Property(name, type, label, description, preview) {
        this._name = name;
        this._type = type;
        this._label = label;
        this._description = description;
        this._preview = preview;
    }
    Object.defineProperty(Property.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Property.prototype.generateFake = function (_preview) {
        var token = 'lorem.word';
        if (_preview['token'] == null && _preview['property'] != null) {
            token = '{{' + _preview['property'] + '}}';
        }
        if (_preview['token'] != null) {
            token = _preview['token'];
        }
        try {
            return faker.fake(token);
        }
        catch (e) {
            return "Invalid faker configuration \"" + token + "\". " + e.Message;
        }
    };
    Object.defineProperty(Property.prototype, "preview", {
        get: function () {
            if (typeof this._preview == 'object') {
                if (this._preview['faker'] != null) {
                    return this.generateFake(this._preview['faker']);
                }
                else if (this.type == 'pattern') {
                    return this._preview;
                }
                else {
                    return JSON.stringify(this._preview);
                }
            }
            return this._preview;
        },
        set: function (value) {
            this._preview = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    return Property;
}());
exports.default = Property;
