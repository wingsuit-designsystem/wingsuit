import IPatternStorage from './IPatternStorage';
import Pattern from './Pattern';
import * as fs from 'fs';
import PatternVariant from './PatternVariant';

export default class PatternStorage implements IPatternStorage {
  private definitions = {};

  loadPattern(patternId: string): Pattern {
    const definition: {} = this.definitions['patterns'][patternId];
    if (definition == null) {
      return null;
    }
    return new Pattern(patternId, definition);
  }

  loadVariant(patternId: string, variantId: string): PatternVariant {
    const pattern: Pattern = this.loadPattern(patternId);
    if (pattern != null) {
      return pattern.getVariant(variantId);
    }
    return null;
  }

  createDefinitionsFromFile(path: string): void {
    this.definitions = JSON.parse(fs.readFileSync(path, 'utf8'));
  }

  createDefinitions(definition: {}): void {
    this.definitions = definition;
  }

}
