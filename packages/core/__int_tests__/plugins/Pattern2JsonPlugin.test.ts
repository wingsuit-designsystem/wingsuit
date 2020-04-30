const fs = require('fs-extra');
const path = require('path');

import Pattern2JsonPlugin from '../../src/server/plugins/Pattern2JsonPlugin';

const targetFilePath:string = path.resolve(`${__dirname}/../_data/test.generate.json`);
const sourceFolderPath:string = path.resolve(`${__dirname}/../_data`);
const patternStorageGenerator = new Pattern2JsonPlugin(sourceFolderPath, targetFilePath);
const namespaces = require('./namespaces');
import { twigRenderEngine } from '@wingsuit-designsystem/pattern';
twigRenderEngine.setNamespaces(namespaces['default']);

// eslint-disable-next-line no-undef
test('generate', (done) => {
  patternStorageGenerator.generate(() => {
    fs.readJson(targetFilePath, (readerr, existingPatternJson) => {
      // eslint-disable-next-line no-undef
      expect(existingPatternJson.patterns['card']['fields']['image']['type']).toBe('rendered');
      expect(existingPatternJson.patterns['card']['variants']['horizontal']['fields']['image']['type']).toBe('rendered');
      expect(Object.values(existingPatternJson.patterns).length).toBe(3);
      done();
    });
  });
});
