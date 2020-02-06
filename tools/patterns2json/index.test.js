const fs = require('fs-extra');

const Pattern2Yaml = require('./index');

const targetFilePath = `${__dirname}/dist/output.json`;
const Pattern2YamlPlugin = new Pattern2Yaml(`${__dirname}/tests/_patterns`, targetFilePath);

// eslint-disable-next-line no-undef
test('generate', (done) => {
  Pattern2YamlPlugin.generate(() => {
    fs.readJson(targetFilePath, (readerr, existingPatternJson) => {
      // eslint-disable-next-line no-undef
      expect(existingPatternJson.patterns.length).toBe(4);
      done();
    });
  });
});
