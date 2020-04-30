import { storage, twigRenderEngine } from '@wingsuit-designsystem/pattern';
import {configure as storybookConfigure, storiesOf, addParameters} from '@storybook/html';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import wingsuitTheme from './theme';

import centered from '@storybook/addon-centered/html';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import '@storybook/addon-docs/register';

const Twig = require('twig');
const twigDrupal = require('twig-drupal-filters');

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
export function configure(module:NodeModule, storybookContext, dataContext, uipatternsContext, templateContext, namespaces) {
  // Theming
  addParameters({
    options: {
      theme: wingsuitTheme,
    },
  });

  storage.setNamespaces(namespaces);
  storage.createDefinitionsFromContext(uipatternsContext);
  storage.createTwigStorageFromContext(templateContext);

  dataContext.keys().forEach((key) => {
    const data = dataContext(key);
    if (data.patterns == null) {
      const dataName = Object.keys(data)[0];
      storage.addGlobal(dataName, data[dataName]);
    }
  });

  Twig.cache();
  twigRenderEngine.setRenderer(new twigRenderEngine.StoredTwigRenderer());
  twigRenderEngine.setNamespaces(namespaces);
  twigRenderEngine.setTwig(Twig)
  twigRenderEngine.twigFunctions();
  twigDrupal(Twig);

  storybookConfigure(storybookContext, module);
}

export function tellStories(patternPath, module) {
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

  addParameters({
    docs: {
      container: DocsContainer,
      page: DocsPage,
    },
  });

  story.addDecorator(centered);

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
      return twigRenderEngine.renderPatternPreview(patternId, variantKey, mergedSettingValues);

    });
  });
  return story;
}
