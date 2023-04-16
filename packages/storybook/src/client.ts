import { PatternVariant, storage } from '@wingsuit-designsystem/pattern';

function getStorybookControlsOptions(setting, variant: PatternVariant) {
  const options: any = setting.getOptions();
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
export function argTypes(patternId, variantId) {
  const variant = storage.loadVariant(patternId, variantId);
  const resultArgTypes: any = {};

  Object.keys(variant.getSettings()).forEach((key) => {
    const setting = variant.getSetting(key);
    if (
      setting.isEnable() &&
      setting.getType() !== 'group' &&
      setting.getType() !== 'media_library'
    ) {
      resultArgTypes[key] = {
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
        resultArgTypes[key].type.name = 'enum';
        resultArgTypes[key].description += `<br>Option keys: ${Object.keys(
          setting.getOptions()
        ).join(', ')}`;
        resultArgTypes[key].options = Object.keys(getStorybookControlsOptions(setting, variant));
        resultArgTypes[key].control = {
          labels: getStorybookControlsOptions(setting, variant),
          type: setting.getType() === 'radio' ? 'radio' : 'select',
        };
      } else if (setting.getType() === 'boolean') {
        resultArgTypes[key].type.name = 'boolean';
        resultArgTypes[key].control = {
          type: 'boolean',
        };
      } else if (setting.getType() === 'number') {
        resultArgTypes[key].type.name = 'number';
        resultArgTypes[key].control = {
          type: 'number',
        };
      } else {
        resultArgTypes[key].type.name = 'string';
        resultArgTypes[key].control = {
          type: 'text',
        };
      }
    } else {
      resultArgTypes[key] = {
        table: {
          disable: true,
        },
      };
    }
  });

  Object.keys(variant.getFields()).forEach((key) => {
    const field = variant.getField(key);
    if (field.isEnable()) {
      resultArgTypes[key] = {
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
        resultArgTypes[key].type.name = 'object';
        resultArgTypes[key].control = {
          type: 'object',
        };
      } else if (field.getType() === 'pattern' || field.getType() === 'media_library') {
        resultArgTypes[key].type.name = 'boolean';
        resultArgTypes[key].defaultValue = true;
        resultArgTypes[key].control = {
          type: 'boolean',
        };
      } else {
        resultArgTypes[key].type.name = 'string';
        resultArgTypes[key].control = {
          type: 'text',
        };
      }
    } else {
      resultArgTypes[key] = {
        table: {
          disable: true,
        },
      };
    }
  });
  resultArgTypes.patternId = {
    table: {
      disable: true,
    },
  };
  resultArgTypes.variantId = {
    table: {
      disable: true,
    },
  };
  resultArgTypes.variant = {
    table: {
      disable: true,
    },
  };
  return resultArgTypes;
}

export function args(defaultArgs, patternId, variantId) {
  const variant = storage.loadVariant(patternId, variantId);
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
