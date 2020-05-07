import {storage, renderer, Pattern} from '@wingsuit-designsystem/pattern';
import {configure as storybookConfigure, storiesOf, addParameters} from '@storybook/html';
import {withKnobs, text, boolean, number, select} from '@storybook/addon-knobs';

import centered from '@storybook/addon-centered/html';
import {DocsPage, DocsContainer, Description, Props, Meta} from '@storybook/addon-docs/blocks';
import wingsuitTheme from './theme';
import '@storybook/addon-docs/register';
import {TwingRenderer} from "@wingsuit-designsystem/pattern";

function getStorybookKnobsOptions(setting) {
  const options:{} = setting.getOptions();
  let knobsOption = {};

  if (setting.isRequired() === false) {
    knobsOption = {
      Empty: ''
    };
  }
  Object.keys(options).forEach((key) => {
    const paramKey = options[key] != null ? options[key] : key;
    knobsOption[paramKey] = key;
  })
  return knobsOption;
}

export function configure(module: NodeModule, storybookContext, dataContext, wingsuitYmlContext, templateContext, namespaces) {
  // Theming
  addParameters({
    docs: {
      meta: Meta,
      container: DocsContainer,
      page: DocsPage,
      description: Description,
      props: Props
    },
    options: {
      theme: wingsuitTheme,
    },
  });


  storage.setNamespaces(namespaces);
  storage.createDefinitionsFromContext(wingsuitYmlContext);
  storage.createTwigStorageFromContext(templateContext);
  storage.createGlobalsFromContext(dataContext);

  renderer.setRenderer(new TwingRenderer());

  storybookConfigure(() => {
    // Load stories from wingusit.yml.
    const patternIds = storage.getPatternIds();
    patternIds.forEach( (patternId) => {
      getStories(storage.loadPattern(patternId), module);
    });

    // Load stories form storybook app.
    const allExports:any = [];
    storybookContext.keys().forEach(key => allExports.push(storybookContext(key)));
    return allExports;
  }, module);
}

function getStories(pattern: Pattern, module) {

  const patternLabel = `${pattern.getNamespace()}/${pattern.getLabel()}`;
  const story = storiesOf(patternLabel, module);
  story.addDecorator(withKnobs);
  story.addDecorator(centered);
  Object.keys(pattern.getPatternVariants()).forEach((variantKey) => {
    const variant = pattern.getVariant(variantKey);
    const variables = variant.getVariables();
    story.add(variant.getLabel(), () => {
      const knobsVariables = [];
      const groupSetting = 'Settings';
      Object.keys(variant.getSettings()).forEach((key) => {
        const setting = variant.getSetting(key);
        if (setting.isEnable()) {
          if (setting.getType() === 'select') {
            knobsVariables[key] = select(
              setting.getLabel(),
              getStorybookKnobsOptions(setting),
              setting.getPreview(), groupSetting
            );
          } else if (setting.getType() === 'boolean') {
            knobsVariables[key] = boolean(setting.getLabel(), setting.getPreview(), groupSetting);
          } else if (setting.getType() === 'number') {
            knobsVariables[key] = number(setting.getLabel(), setting.getPreview(), undefined, groupSetting);
          } else {
            knobsVariables[key] = text(setting.getLabel(), setting.getPreview(), groupSetting);
          }
        }
      });
      const groupFields = 'fields';
      Object.keys(variant.getFields()).forEach((key) => {
        const field = variant.getField(key);
        if (field.getType() !== 'pattern') {
          knobsVariables[key] = text(field.getLabel(), field.getPreview(), groupFields);
        }
      });
      const mergedSettingValues: {} = Object.assign(variables, knobsVariables);
      return renderer.renderPatternPreview(pattern.getId(), variantKey, mergedSettingValues);

    }, { notes: variant.getDescription(),  componentSubtitle: pattern.getDescription(), docs: { storyDescription: variant.getDescription() }});
  });
  return story;
}
