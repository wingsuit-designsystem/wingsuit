import * as path from 'path';
import fs from 'fs';
import PatternStorage from '../src/PatternStorage';
import Pattern from '../src/Pattern';
import PatternVariant from '../src/PatternVariant';
import { storage } from '../src';

describe('PatternStorage', () => {
  beforeEach(() => {});

  describe('#createDefinitions', () => {
    test('Load Pattern Card', () => {
      storage.createDefinitions(
        JSON.parse(fs.readFileSync(path.join(__dirname, '_data/patterns.json')))
      );
      const pattern: Pattern = storage.loadPattern('card');
      expect(pattern).toBeInstanceOf(Pattern);
    });
    test('Load Card Variant', () => {
      storage.createDefinitions(
        JSON.parse(fs.readFileSync(path.join(__dirname, '_data/patterns.json')))
      );
      const variant: PatternVariant = storage.loadVariant('card', 'default');
      expect(variant).toBeInstanceOf(PatternVariant);
    });
  });
});
