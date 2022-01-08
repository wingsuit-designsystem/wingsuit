import React from 'react';
import { Pattern, renderer, TwingRenderer } from '@wingsuit-designsystem/pattern';

import { Title, Subtitle, DocsStory, ArgsTable, CURRENT_SELECTION } from '@storybook/addon-docs';
import TwigAttribute from '@wingsuit-designsystem/pattern/dist/TwigAttribute';
import twig from 'react-syntax-highlighter/dist/cjs/languages/prism/markup';
import { PrismLight as ReactSyntaxHighlighter } from 'react-syntax-highlighter';

import { PatternPreview } from '@wingsuit-designsystem/pattern-react/client';
import PatternProperties from './docs/PatternProperties';
import { PatternDoc } from './docs/PatternDoc';
import { PatternInclude } from './docs/PatternInclude';

ReactSyntaxHighlighter.registerLanguage('twig', twig);
renderer.setRenderer(new TwingRenderer());

function getStorybookControlsOptions(setting) {
  const options: {} = setting.getOptions();
  let controls = {};

  if (setting.isRequired() === false) {
    controls = {
      '': 'Empty',
    };
  }
  Object.keys(options).forEach((key) => {
    controls[key] = options[key];
  });
  return controls;
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
  const argTypes: any = {};
  let hasSettings = false;

  Object.keys(variant.getSettings()).forEach((key) => {
    const setting = variant.getSetting(key);

    if (
      setting.isEnable() &&
      setting.getType() !== 'group' &&
      setting.getType() !== 'media_library'
    ) {
      hasSettings = true;
      argTypes[key] = {
        name: key,
        type: {
          type: 'string',
          required: setting.isRequired(),
        },
        table: {
          defaultValue: { summary: setting.getPreview() },
          category: 'Settings',
        },
        defaultValue: setting.getDefaultValue(),
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
        argTypes[key].description += `<br>Option keys: ${Object.keys(setting.getOptions()).join(
          ', '
        )}`;
        argTypes[key].options = Object.keys(getStorybookControlsOptions(setting));
        argTypes[key].control = {
          labels: getStorybookControlsOptions(setting),
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
  if (!hasSettings) {
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

  let hasFields = false;
  Object.keys(variant.getFields()).forEach((key) => {
    const field = variant.getField(key);
    if (field.isEnable()) {
      hasFields = true;
      argTypes[key] = {
        name: key,
        table: {
          category: 'Fields',
        },
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
      } else if (field.getType() === 'pattern' || field.getType() === 'media_library') {
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
  if (hasFields) {
    delete argTypes.FIELDS;
    delete argTypes.SEP;
  }
  return argTypes;
}

export function storiesOf(pattern: Pattern, story) {
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

export {
  isInitDecorator,
  initDecorator,
  initJsBehaviors,
  attachBehaviorDecorator,
} from '@wingsuit-designsystem/pattern-react/client';
export { RenderTwig, PatternPreview } from '@wingsuit-designsystem/pattern-react/client';
export { default as PatternLoad } from './docs/PatternLoad';
export { default as Spacing } from './docs/Spacing';
export { default as Typeset } from './docs/Typeset';
export { PatternDoc, PatternProperties, PatternInclude };
