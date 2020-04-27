import * as fs from 'fs';
import IPatternStorage from './IPatternStorage';
import Pattern from './Pattern';
import PatternVariant from './PatternVariant';
import { IPatternDefinition, IPatternDefinitions } from './definition';

export default class PatternStorage implements IPatternStorage {
  private definitions: IPatternDefinitions = {} as IPatternDefinitions;

  loadPattern(patternId: string): Pattern {
    const definition: IPatternDefinition = this.definitions.patterns[patternId];
    if (definition == null) {
      throw new Error(`Pattern ${patternId} not loaded.`);
    }
    return new Pattern(patternId, definition);
  }

  loadVariant(patternId: string, variantId: string): PatternVariant {
    const pattern: Pattern = this.loadPattern(patternId);
    if (pattern != null) {
      return pattern.getVariant(variantId);
    }
    throw new Error(`Variant ${patternId}.${variantId}  not loaded.`);
  }

  createDefinitionsFromFile(path: string): void {
    this.definitions = JSON.parse(fs.readFileSync(path, 'utf8'));
  }

  createDefinitions(definitions: IPatternDefinitions): void {
    this.definitions = definitions;
  }
}
