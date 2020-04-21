import { storage } from '@wingsuit-designsystem/pattern';

import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export function tellStories(patternId, module, callback) {
  const pattern = storage.loadPattern(patternId);
  const story = storiesOf(pattern.label, module);
  story.addDecorator(withKnobs);
  Object.keys(pattern.patternVariants).forEach((key) => {
    const variant = pattern.patternVariants[key];
    const variables = variant.getVariables();
    story.add(variant.label, () => {
      const knobsVariables = [];
      Object.keys(variant.settings).forEach((key) => {
        knobsVariables[key] = text(key, variant.settings[key].preview);
      });
      const mergedSettingValues: {} = Object.assign(variables, knobsVariables);
      return callback(mergedSettingValues, variant)
    });
  })
  return story;
}
