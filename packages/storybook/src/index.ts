import {storage} from '@wingsuit-designsystem/pattern';

import {storiesOf} from '@storybook/html';
import {withKnobs, text, boolean, number, select} from "@storybook/addon-knobs";

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
        if (variant.settings[key].enable) {
          if (variant.settings[key].type === 'select') {
            knobsVariables[key] = select(variant.settings[key].label, variant.settings[key].options, variant.settings[key].preview);
          } else if (variant.settings[key].type === 'boolean') {
            knobsVariables[key] = boolean(variant.settings[key].label, variant.settings[key].preview);
          } else if (variant.settings[key].type === 'number') {
            knobsVariables[key] = number(variant.settings[key].label, variant.settings[key].preview);
          } else {
            knobsVariables[key] = text(variant.settings[key].label, variant.settings[key].preview);
          }
        }
      });
      const mergedSettingValues: {} = Object.assign(variables, knobsVariables);
      return callback(mergedSettingValues, variant);
    });
  })
  return story;
}
