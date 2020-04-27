import PatternStorage from './PatternStorage';
import IPatternStorage from './IPatternStorage';
import * as TwigRenderEngine from './twigRenderEngine';

export { default as IPatternStorage } from './IPatternStorage';
export const storage: PatternStorage = new PatternStorage();
export const twigRenderEngine = TwigRenderEngine;
export function getStorage(): IPatternStorage {
  return storage;
}
