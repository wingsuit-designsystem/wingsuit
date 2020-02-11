const fs = require('fs-extra');

const Pattern2json = require('./index');

const targetFilePath = `${__dirname}/dist/output.json`;
const Pattern2jsonPlugin = new Pattern2json(`${__dirname}/tests/_patterns`, targetFilePath);

// eslint-disable-next-line no-undef
test('generate', (done) => {
  Pattern2jsonPlugin.generate(() => {
    fs.readJson(targetFilePath, (readerr, existingPatternJson) => {
      // eslint-disable-next-line no-undef
      console.log(existingPatternJson.patterns);
      expect(Object.values(existingPatternJson.patterns).length).toBe(4);
      done();
    });
  });
});
