"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs-extra');
var path = require('path');
var Pattern2JsonPlugin_1 = require("../../src/plugins/Pattern2JsonPlugin");
var targetFilePath = path.resolve(__dirname + "/../_data/test.generate.json");
var sourceFolderPath = path.resolve(__dirname + "/../_data");
var patternStorageGenerator = new Pattern2JsonPlugin_1.default(sourceFolderPath, targetFilePath);
var namespaces = require('./namespaces');
var pattern_1 = require("@wingsuit-designsystem/pattern");
pattern_1.twigRenderEngine.setNamespaces(namespaces['default']);
// eslint-disable-next-line no-undef
test('generate', function (done) {
    patternStorageGenerator.generate(function () {
        fs.readJson(targetFilePath, function (readerr, existingPatternJson) {
            // eslint-disable-next-line no-undef
            expect(existingPatternJson.patterns['card']['fields']['image']['type']).toBe('rendered');
            expect(existingPatternJson.patterns['card']['variants']['horizontal']['fields']['image']['type']).toBe('rendered');
            expect(Object.values(existingPatternJson.patterns).length).toBe(3);
            done();
        });
    });
});
