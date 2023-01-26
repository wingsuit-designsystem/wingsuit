import { TwingEnvironment } from 'twing';
import IPatternStorage from './IPatternStorage';
import PatternStorage from './PatternStorage';
import { init } from './defaultEnvironment';
import * as TwigRenderEngine from './twigRenderEngine';

export { default as IPatternStorage } from './IPatternStorage';
export { TwingRenderer } from './TwingRenderer';
export { default as TwigAttribute } from './TwigAttribute';
export { default as Pattern } from './Pattern';
export { default as PatternVariant } from './PatternVariant';
export const storage: PatternStorage = PatternStorage.getInstance();
export const renderer = TwigRenderEngine;

export { default as IRenderer } from './IRenderer';

export function getStorage(): IPatternStorage {
  return storage;
}

export function initEnvironment(environment: TwingEnvironment) {
  init(environment);
}
