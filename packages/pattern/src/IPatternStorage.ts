import Pattern from './Pattern';
import PatternVariant from './PatternVariant';

export default interface IPatternStorage {
  loadPattern(patternId: string): Pattern;
  loadVariant(patternId: string, variantId: string): PatternVariant;
  createDefinitionsFromFile(path: string): void;
  createDefinitions(definition: {}): void;
  addGlobal(name, value): void;
  getGlobals(): {};
}
