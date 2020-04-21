import PatternStorage from './PatternStorage';
import IPatternStorage from './IPatternStorage';
export const storage: PatternStorage = new PatternStorage();
import * as TwigRenderEngine from './TwigRenderEngine';

export const twigRenderEngine = TwigRenderEngine;
export { default as IPatternStorage } from './IPatternStorage';

export function getStorage(): IPatternStorage {
  return storage;
}
