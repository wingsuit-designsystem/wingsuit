import React, { FC } from 'react';
import { TabBar } from '@storybook/components';

import { PatternVariant } from '@wingsuit-designsystem/pattern';

type Props = { variant: PatternVariant };

function getOptionString(setting) {
  if (setting.options) {
    return `<br><strong>Options:</strong><br> ${Object.keys(setting.getOptions()).join('  |  ')}`;
  }
  return '';
}

export const PatternProperties: FC<Props> = (props: Props) => {
  const properties: any = {};

  const { variant } = props;
  const fields = variant.getFields();
  properties.Fields = { name: 'Fields', rows: {} };
  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    if (field.isEnable()) {
      properties.Fields.rows[key] = {
        name: key,
        type: field.getType(),
        description: `<b>[${field.getType()}]</b> ${field.getLabel()} <br> ${
          field.getDescription() != null ? field.getDescription() : ''
        }`,
      };
    }
  });
  const settings = variant.getSettings();
  properties.Settings = { name: 'Settings', rows: {} };
  Object.keys(settings).forEach((key) => {
    const setting = settings[key];
    if (setting.isEnable()) {
      properties.Settings.rows[key] = {
        name: setting.getName(),
        description: `<b>[${setting.getType()}]</b> ${setting.getLabel()} <br> ${
          setting.getDescription() != null ? `${setting.getDescription()} <br> ` : ''
        } ${getOptionString(setting)}`,
        defaultValue: {
          summary: setting.getDefaultValue(),
        },
        type: {
          name: setting.getLabel(),
          required: setting.isRequired(),
        },
      };
    }
  });

  return <TabBar />;
};

PatternProperties.displayName = 'PatternProperties';

export default PatternProperties;
