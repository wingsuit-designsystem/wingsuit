import * as path from 'path';
import PatternStorage from '../src/PatternStorage';
import Pattern from '../src/Pattern';
import PatternVariant from '../src/PatternVariant';

describe('PatternStorage', () => {
  let storage: PatternStorage = new PatternStorage();

  beforeEach(() => {
    storage = new PatternStorage();
  });

  describe('#createDefinitionsFromFile', () => {
    test('Load Pattern Card', () => {
      storage.createDefinitionsFromFile(path.join(__dirname, '_data/patterns.json'));
      const pattern: Pattern = storage.loadPattern('card');
      expect(pattern).toBeInstanceOf(Pattern);
    });
    test('Load Card Variant', () => {
      storage.createDefinitionsFromFile(path.join(__dirname, '_data/patterns.json'));
      const variant: PatternVariant = storage.loadVariant('card', 'default');
      expect(variant).toBeInstanceOf(PatternVariant);
    });
  });
});
