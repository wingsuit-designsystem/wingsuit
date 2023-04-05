import Pattern from './Pattern';
import PatternVariant from './PatternVariant';
import { IPatternDefinition } from './definition';

export default interface IPatternStorage {
  loadPattern(patternId: string): Pattern;
  loadVariant(patternId: string, variantId: string): PatternVariant;
  createDefinitions(definition: any): void;
  addDefinition(id: string, pattern: IPatternDefinition): void;
  addGlobal(name, value): void;
  getGlobals(): any;
  getPatternIds(): string[];
}
