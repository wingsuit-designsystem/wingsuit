import { storage } from '@wingsuit-designsystem/pattern';

import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

export function tellStories(patternId, module, callback) {
  const pattern = storage.loadPattern(patternId);
  const story = storiesOf(pattern.label, module);
  story.addDecorator(withKnobs);
  Object.keys(pattern.getPatternVariants()).forEach((variantKey) => {
    const variant = pattern.getVariant(variantKey);
    const variables = variant.getVariables();
    story.add(variant.getLabel(), () => {
      const knobsVariables = [];
      Object.keys(variant.getSettings()).forEach((key) => {
        const setting = variant.getSetting(key);
        if (setting.enable()) {
          if (setting.getType() === 'select') {
            knobsVariables[key] = select(
              setting.getLabel(),
              setting.getOptions(),
              setting.getPreview()
            );
          } else if (setting.getType() === 'boolean') {
            knobsVariables[key] = boolean(setting.getLabel(), setting.getPreview());
          } else if (setting.getType() === 'number') {
            knobsVariables[key] = number(setting.getLabel(), setting.getPreview());
          } else {
            knobsVariables[key] = text(setting.getLabel(), setting.getPreview());
          }
        }
      });
      const mergedSettingValues: {} = Object.assign(variables, knobsVariables);
      return callback(mergedSettingValues, variant);
    });
  });
  return story;
}
