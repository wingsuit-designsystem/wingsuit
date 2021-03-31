import React from 'react';
import { storage, renderer, Pattern, TwingRenderer } from '@wingsuit-designsystem/pattern';
import { configure as storybookConfigure, storiesOf } from '@storybook/react';
import {
  Title,
  Subtitle,
  DocsStory,
  ArgsTable,
  CURRENT_SELECTION,
} from '@storybook/addon-docs/blocks';
import TwigAttribute from '@wingsuit-designsystem/pattern/dist/TwigAttribute';
import '@storybook/addon-docs/register';
import twig from 'react-syntax-highlighter/dist/cjs/languages/prism/markup';
import { PrismLight as ReactSyntaxHighlighter } from 'react-syntax-highlighter';

import PatternPreview from './components/PatternPreview';
import PatternProperties from './docs/PatternProperties';
import { PatternDoc } from './docs/PatternDoc';
import { PatternInclude } from './docs/PatternInclude';

ReactSyntaxHighlighter.registerLanguage('twig', twig);

function getStorybookControlsOptions(setting) {
  const options: {} = setting.getOptions();
  let knobsOption = {};

  if (setting.isRequired() === false) {
    knobsOption = {
      Empty: '',
    };
  }
  Object.keys(options).forEach((key) => {
    const paramKey = options[key] != null ? options[key] : key;
    knobsOption[paramKey] = key;
  });
  return knobsOption;
}

export function configure(
  module: NodeModule,
  storybookContext,
  dataContext,
  templateContext,
  namespaces
) {
  storage.setNamespaces(namespaces);
  storage.createDefinitionsFromMultiContext(storybookContext);
  storage.createTwigStorageFromContext(templateContext);
  storage.createGlobalsFromContext(dataContext);
  renderer.setRenderer(new TwingRenderer());
  storybookConfigure(() => {
    // Load stories from wingusit.yml.
    const patternIds = storage.getPatternIds();
    patternIds.forEach((patternId) => {
      const pattern = storage.loadPattern(patternId);
      if (pattern.isVisible('storybook')) {
        getStories(pattern, module);
      }
    });

    // Load stories form storybook app.
    const allExports: any = [];
    if (Array.isArray(storybookContext) === false) {
      storybookContext.keys().forEach((key) => {
        if (storybookContext(key).default !== null) {
          allExports.push(storybookContext(key));
        }
      });
    } else {
      storybookContext.forEach((innerContext) => {
        innerContext.keys().forEach((key) => {
          if (innerContext(key).default != null) {
            allExports.push(innerContext(key));
          }
        });
      });
    }
    return allExports;
  }, module);
}
function getArgs(defaultArgs, variant) {
  const fields = variant.getFields();
  const resultArgs = { ...defaultArgs };
  const settings = variant.getSettings();
  Object.keys(settings).forEach((key) => {
    if (settings[key].getType() === 'attributes') {
      resultArgs[key] = new TwigAttribute(resultArgs[key]);
    }
  });
  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    if (field.getType() === 'pattern') {
      if (resultArgs[key] === false) {
        resultArgs[key] = null;
      } else {
        delete resultArgs[key];
      }
    }

  });
  return resultArgs;
}
function getArgTypes(variant) {
  const argTypes: any = {
    SETTINGS: {
      name: 'SETTINGS:',
      type: 'string',
      table: {
        defaultValue: { summary: null },
      },
      control: null,
    },
  };
  let hasSettings = false;
  Object.keys(variant.getSettings()).forEach((key) => {
    const setting = variant.getSetting(key);

    if (setting.isEnable() && setting.getType() !== 'group') {
      hasSettings = true;
      argTypes[key] = {
        name: key,
        type: {
          required: setting.isRequired(),
        },
        table: {
          defaultValue: { summary: setting.getPreview() },
        },
        defaultValue: setting.getPreview(),
        description: `${setting.getLabel()} ${
          setting.getDescription() !== '' ? ` - ${setting.getDescription()}` : ''
        }`,
      };
      if (
        setting.getType() === 'select' ||
        setting.getType() === 'radios' ||
        setting.getType() === 'colorwidget'
      ) {
        argTypes[key].type.name = 'enum';
        argTypes[key].control = {
          options: getStorybookControlsOptions(setting),
          type: setting.getType() === 'radio' ? 'radio' : 'select',
        };
      } else if (setting.getType() === 'boolean') {
        argTypes[key].type.name = 'boolean';
        argTypes[key].control = {
          type: 'boolean',
        };
      } else if (setting.getType() === 'number') {
        argTypes[key].type.name = 'number';
        argTypes[key].control = {
          type: 'number',
        };
      } else {
        argTypes[key].type.name = 'string';
        argTypes[key].control = {
          type: 'text',
        };
      }
    }
  });
  if (hasSettings === false) {
    delete argTypes.SETTINGS;
  } else {
    argTypes.SEP = {
      type: 'string',
      name: '',
      table: {
        defaultValue: { summary: null },
      },
      control: null,
    };
  }
  argTypes.FIELDS = {
    name: 'FIELDS:',
    description: null,
    type: 'string',
    table: {
      defaultValue: { summary: null },
    },
    control: {
      type: '',
    },
  };
  let hasFields = false;
  Object.keys(variant.getFields()).forEach((key) => {
    const field = variant.getField(key);
    if (field.isEnable()) {
      hasFields = true;
      argTypes[key] = {
        name: key,
        type: {
          required: false,
        },
        defaultValue: field.getPreview(),
        description: `${field.getLabel()} ${
          field.getDescription() !== '' ? ` - ${field.getDescription()}` : ''
        }`,
      };
      if (field.getType() === 'object') {
        argTypes[key].type.name = 'object';
        argTypes[key].control = {
          type: 'object',
        };
      } else if (field.getType() === 'pattern') {
        argTypes[key].description = `Display "${argTypes[key].name}"`;
        argTypes[key].type.name = 'boolean';
        argTypes[key].defaultValue = true;
        argTypes[key].control = {
          type: 'boolean',
        };
      } else {
        argTypes[key].type.name = 'string';
        argTypes[key].control = {
          type: 'text',
        };
      }
    }
  });
  if (hasFields === false) {
    delete argTypes.FIELDS;
    delete argTypes.SEP;
  }
  return argTypes;
}

function getStories(pattern: Pattern, module) {
  const patternLabel = `${pattern.getNamespace()}/${pattern.getLabel()}`;
  const story = storiesOf(patternLabel, module);

  Object.keys(pattern.getPatternVariants()).forEach((variantKey) => {
    const variant = pattern.getVariant(variantKey);
    const argTypes = getArgTypes(variant);
    let parameters = {
      argTypes,
      component: PatternPreview,
      notes: variant.getDescription(),
      docs: {
        page: () => (
          <>
            <Title />
            <Subtitle>
              <div dangerouslySetInnerHTML={{ __html: pattern.getDescription() }} />
            </Subtitle>
            <DocsStory id={CURRENT_SELECTION} />
            <ArgsTable story={CURRENT_SELECTION} />
            <PatternInclude variant={variant} />
          </>
        ),
        storyDescription: variant.getDescription(),
      },
    };

    parameters = Object.assign(parameters, pattern.getParameters());

    story.add(
      variant.getLabel(),
      (args) => {
        const vars = getArgs(args, variant);
        return <PatternPreview patternId={pattern.getId()} variantId={variantKey} {...vars} />;
      },
      parameters
    );
  });
  return story;
}

export { drupalAttachBehaviorDecorator } from './drupal';
export {
  isInit as isInitDecorator,
  init as initDecorator,
  init as initJsBehaviors,
  attachBehaviorDecorator,
} from './behaviors';
export { default as RenderTwig } from './components/RenderTwig';
export { default as PatternPreview } from './components/PatternPreview';
export { default as PatternLoad } from './docs/PatternLoad';
export { default as Spacing } from './docs/Spacing';
export { default as Typeset } from './docs/Typeset';
export { default as wingsuitTheme } from './theme';
export { PatternDoc, PatternProperties, PatternInclude };
