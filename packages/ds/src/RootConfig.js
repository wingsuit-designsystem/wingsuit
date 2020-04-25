"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RootConfig = /** @class */ (function () {
    function RootConfig(rootPath) {
        this._distPath = 'dist/';
        this._assetBundleFolder = 'assets/';
        this._assetAtomicFolder = 'atomic/';
        this._rootPath = rootPath;
    }
    Object.defineProperty(RootConfig.prototype, "rootPath", {
        get: function () {
            return this._rootPath;
        },
        set: function (value) {
            this._rootPath = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RootConfig.prototype, "distPath", {
        get: function () {
            return this._distPath;
        },
        set: function (value) {
            this._distPath = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RootConfig.prototype, "assetBundleFolder", {
        get: function () {
            return this._assetBundleFolder;
        },
        set: function (value) {
            this._assetBundleFolder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RootConfig.prototype, "assetAtomicFolder", {
        get: function () {
            return this._assetAtomicFolder;
        },
        set: function (value) {
            this._assetAtomicFolder = value;
        },
        enumerable: true,
        configurable: true
    });
    return RootConfig;
}());
exports.default = RootConfig;
