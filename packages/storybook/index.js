import { storage } from '@wingsuit-designsystem/pattern';
import { storiesOf as storiesOfPattern } from './dist/storyof';

global.window.Drupal = {};
global.window.Drupal.behaviors = {};

export function storyKind(patternId) {
  const pattern = storage.loadPattern(patternId);
  return `${pattern.getNamespace()}/${pattern.getLabel()}`;
}
export function addToStory(patternId, story) {
  const pattern = storage.loadPattern(patternId);
  storiesOfPattern(pattern, story);
}
