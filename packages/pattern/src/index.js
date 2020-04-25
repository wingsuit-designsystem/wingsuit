"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PatternStorage_1 = require("./PatternStorage");
var TwigRenderEngine = require("./twigRenderEngine");
exports.storage = new PatternStorage_1.default();
exports.twigRenderEngine = TwigRenderEngine;
function getStorage() {
    return exports.storage;
}
exports.getStorage = getStorage;
