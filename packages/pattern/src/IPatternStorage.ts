import Pattern from './Pattern';
import PatternVariant from './PatternVariant';
import { IPatternDefinition } from './definition';

export default interface IPatternStorage {
  loadPattern(patternId: string): Pattern;
  loadVariant(patternId: string, variantId: string): PatternVariant;
  createDefinitions(definition: {}): void;
  addDefinition(id: string, pattern: IPatternDefinition): void;
  addGlobal(name, value): void;
  getGlobals(): {};
  getPatternIds(): string[];
  createGlobalsFromContext(context): void;
  createTwigStorageFromContext(context): void;
  findTwigById(id): any | null;
  addTwig(namespace, resource): void;
  findTwigByNamespace(namespace): any | null;
}
