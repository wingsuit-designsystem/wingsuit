"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppConfig = /** @class */ (function () {
    function AppConfig(appName, appPath) {
        this._namespaces = {};
        this._appName = appName;
        this._appPath = appPath;
    }
    Object.defineProperty(AppConfig.prototype, "namespaces", {
        get: function () {
            return this._namespaces;
        },
        set: function (value) {
            this._namespaces = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig.prototype, "appName", {
        get: function () {
            return this._appName;
        },
        set: function (value) {
            this._appName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig.prototype, "appPath", {
        get: function () {
            return this._appPath;
        },
        set: function (value) {
            this._appPath = value;
        },
        enumerable: true,
        configurable: true
    });
    return AppConfig;
}());
exports.default = AppConfig;
