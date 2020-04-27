"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var basePath = path.resolve(__dirname, '../_data');
exports.default = {
    // Atomic concepts
    protons: path.resolve(basePath, 'protons'),
    atoms: path.resolve(basePath, 'atoms'),
    molecules: path.resolve(basePath, 'molecules'),
    organisms: path.resolve(basePath, 'organisms'),
    templates: path.resolve(basePath, 'templates'),
    pages: path.resolve(basePath, 'pages'),
};
