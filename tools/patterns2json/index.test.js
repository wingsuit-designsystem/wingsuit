const pattern2YamlPlugin = require('./index');
const targetFilePath = __dirname + '/dist/output.json';
const fs = require('fs-extra');
const Pattern2YamlPlugin = new pattern2YamlPlugin(__dirname + '/tests/_patterns', targetFilePath);

test('generate', () => {
    Pattern2YamlPlugin.generate();
    fs.readJson(targetFilePath, (readerr, existingPatternJson) => {
        expect(existingPatternJson.patterns.length).toBe(4);
    });
});
