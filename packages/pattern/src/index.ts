import IPatternStorage from './IPatternStorage';
import PatternStorage from './PatternStorage';
import * as TwigRenderEngine from './twigRenderEngine';
import { TwingRenderer } from './TwingRenderer';

export { default as IPatternStorage } from './IPatternStorage';
export { TwingRenderer } from './TwingRenderer';
export { default as Pattern } from './Pattern';
export { default as PatternVariant } from './PatternVariant';
export const storage: PatternStorage = PatternStorage.getInstance();

export { default as IRenderer } from './IRenderer';

export const renderer = TwigRenderEngine;

renderer.setRenderer(new TwingRenderer());

export function getStorage(): IPatternStorage {
  return storage;
}
