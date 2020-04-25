"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TwigAttribute = /** @class */ (function () {
    function TwigAttribute() {
        this.attributes = [];
        this.attributes = [];
    }
    TwigAttribute.prototype.setAttribute = function (key, value) {
        this.attributes[key] = value;
        return this;
    };
    TwigAttribute.prototype.removeAttribute = function (key) {
        delete this.attributes[key];
        this.attributes.splice(key, 1);
        return this;
    };
    TwigAttribute.prototype.removeClass = function (className) {
        if (className === void 0) { className = ''; }
        var classAry = className.split(' ');
        for (var i = 0; i < classAry.length; i++) {
            var classItem = classAry[i];
            var foundItem = this.attributes['class'].indexOf(classItem);
            if (this.attributes['class'] != null && foundItem !== -1) {
                this.attributes['class'].splice(foundItem, 1);
            }
        }
    };
    TwigAttribute.prototype.addClass = function (className) {
        if (className === void 0) { className = ''; }
        if (this.attributes['class'] == null) {
            this.attributes['class'] = [];
        }
        var classAry = className.split(' ');
        for (var i = 0; i < classAry.length; i++) {
            if (classAry[i] !== '') {
                this.attributes['class'].push(classAry[i]);
            }
        }
        return this;
    };
    TwigAttribute.prototype.toString = function () {
        var _this = this;
        var output = '';
        Object.keys(this.attributes).forEach(function (key) {
            var attributeValue = null;
            if (typeof _this.attributes[key] === 'object' && Array.isArray(_this.attributes[key])) {
                attributeValue = _this.attributes[key].join(' ');
            }
            else if (typeof _this.attributes[key] === 'string') {
                attributeValue = _this.attributes[key];
            }
            if (attributeValue !== null) {
                output += key + "=\"" + attributeValue + "\" ";
            }
        });
        return output.trim();
    };
    return TwigAttribute;
}());
exports.default = TwigAttribute;
