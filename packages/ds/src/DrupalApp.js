"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StorybookApp = /** @class */ (function () {
    function StorybookApp(appConfig) {
        this._appConfig = appConfig;
    }
    StorybookApp.prototype.getDefaultWebpackConfig = function () {
        return {};
    };
    StorybookApp.prototype.init = function () {
    };
    StorybookApp.prototype.getConfig = function () {
        return undefined;
    };
    StorybookApp.prototype.getDevelopmentWebpackConfig = function () {
        return {};
    };
    StorybookApp.prototype.getProductionWebpackConfig = function () {
        return {};
    };
    return StorybookApp;
}());
exports.default = StorybookApp;
