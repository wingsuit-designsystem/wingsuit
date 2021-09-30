import IPatternStorage from './IPatternStorage';
import PatternStorage from './PatternStorage';
import * as TwigRenderEngine from './twigRenderEngine';

export { default as IPatternStorage } from './IPatternStorage';
export { TwingRenderer } from './TwingRenderer';
export { default as Pattern } from './Pattern';
export { default as PatternVariant } from './PatternVariant';
export const storage: PatternStorage = PatternStorage.getInstance();

export const renderer = TwigRenderEngine;
export function getStorage(): IPatternStorage {
  return storage;
}
