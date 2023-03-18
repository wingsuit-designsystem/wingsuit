import React from 'react';

import TwigAttribute from '@wingsuit-designsystem/pattern/dist/TwigAttribute';

import { PatternVariant } from '@wingsuit-designsystem/pattern';
import PatternProperties from './docs/PatternProperties';
import { PatternDoc } from './docs/PatternDoc';
import { PatternInclude } from './docs/PatternInclude';

function getStorybookControlsOptions(setting) {
  const options: {} = setting.getOptions();
  let controls = {};

  if (setting.isRequired() === false) {
    controls = {
      '': 'Empty',
    };
  }
  Object.keys(options).forEach((key) => {
    if (options[key].label) {
      controls[key] = options[key].label;
    } else {
      controls[key] = options[key];
    }
  });
  return controls;
}

export function getArgs(defaultArgs, variant: PatternVariant) {
  const fields = variant.getFields();
  const resultArgs = { ...defaultArgs, ...variant.getVariables(true, true, false) };
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
export function getArgTypes(variant) {
  const argTypes: any = {};

  Object.keys(variant.getSettings()).forEach((key) => {
    const setting = variant.getSetting(key);
    if (
      setting.isEnable() &&
      setting.getType() !== 'group' &&
      setting.getType() !== 'media_library'
    ) {
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

  Object.keys(variant.getFields()).forEach((key) => {
    const field = variant.getField(key);
    if (field.isEnable()) {
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
  argTypes.patternId = {
    table: {
      disable: true,
    },
  };
  argTypes.variantId = {
    table: {
      disable: true,
    },
  };
  return argTypes;
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
