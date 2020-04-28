import { storage } from '@wingsuit-designsystem/pattern';

import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

function getStorybookKnobsOptions (options: {
  [key:string]: string
}){
  const knobsOption = {};
  Object.keys(options).forEach((key)=>{
    const paramKey = options[key] != null ? options[key] : key;
    knobsOption[paramKey] = key;
  })
  return knobsOption;
}
export function tellStories(patternPath, module, callback) {
  const patternAry = patternPath.split('/');
  const patternId = patternAry[patternAry.length - 1];
  let namespace = '';
  if (patternAry.length > 1) {
    patternAry.pop();
    namespace = patternAry.join('/');

  }
  const pattern = storage.loadPattern(patternId);

  const patternLabel = namespace !== '' ? `${namespace}/${pattern.getLabel()}`:pattern.getLabel();
  const story = storiesOf( patternLabel, module);
  story.addDecorator(withKnobs);

  Object.keys(pattern.getPatternVariants()).forEach((variantKey) => {
    const variant = pattern.getVariant(variantKey);
    const variables = variant.getVariables();
    story.add(variant.getLabel(), () => {
      const knobsVariables = [];
      Object.keys(variant.getSettings()).forEach((key) => {
        const setting = variant.getSetting(key);
        if (setting.isEnable()) {
          if (setting.getType() === 'select') {
            knobsVariables[key] = select(
              setting.getLabel(),
              getStorybookKnobsOptions(setting.getOptions()),
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
