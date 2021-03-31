import * as path from 'path';
import fs from 'fs';
import PatternStorage from '../src/PatternStorage';
import Pattern from '../src/Pattern';
import PatternVariant from '../src/PatternVariant';
import { storage } from '../src';

describe('PatternStorage', () => {
  beforeEach(() => {});

  describe('#createDefinitions', () => {
    test('Test extend', () => {
      storage.createDefinitions(
        JSON.parse(fs.readFileSync(path.join(__dirname, '_data/patterns.json'))).patterns
      );
      const pattern: Pattern = storage.loadPattern('simple_extend_setting');
      expect(pattern).toBeInstanceOf(Pattern);
      expect(pattern.getDefaultVariant().getFields().length).toBe(0);
      expect(Object.keys(pattern.getDefaultVariant().getSettings()).length).toBe(1);
      expect(
        pattern
          .getDefaultVariant()
          .getSetting('setting')
          .getPreview()
      ).toBe('correct');

      const pattern2: Pattern = storage.loadPattern('simple_extend_setting_setting');
      expect(pattern2.getDefaultVariant().getFields().length).toBe(0);
      expect(Object.keys(pattern2.getDefaultVariant().getSettings()).length).toBe(1);

      const pattern_hierachy: Pattern = storage.loadPattern('hierachy_extend_setting_setting');
      expect(pattern_hierachy.getDefaultVariant().getFields().length).toBe(0);
      expect(Object.keys(pattern_hierachy.getDefaultVariant().getSettings()).length).toBe(1);
    });
    test('Load Pattern Card', () => {
      storage.createDefinitions(
        JSON.parse(fs.readFileSync(path.join(__dirname, '_data/patterns.json'))).patterns
      );
      const pattern: Pattern = storage.loadPattern('card');
      expect(pattern).toBeInstanceOf(Pattern);
    });
    test('Load Card Variant', () => {
      storage.createDefinitions(
        JSON.parse(fs.readFileSync(path.join(__dirname, '_data/patterns.json'))).patterns
      );
      const variant: PatternVariant = storage.loadVariant('card', 'default');
      expect(variant).toBeInstanceOf(PatternVariant);
    });
    test('Load patterns by Namespace', () => {
      storage.createDefinitions(
        JSON.parse(fs.readFileSync(path.join(__dirname, '_data/patterns.json'))).patterns
      );
      const patterns: Pattern[] = storage.loadPatternsByNamespace('atoms');
      expect(patterns.length).toBe(2);
    });
  });
});
