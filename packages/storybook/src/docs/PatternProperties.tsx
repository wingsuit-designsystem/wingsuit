import React, { FC, useContext } from 'react';
import { TabbedArgsTable } from '@storybook/components';
import { DocsContext, StoryData } from '@storybook/addon-docs/blocks';

import { getContextualStory } from './utils';

type Props = { story?: StoryData };

function getOptionString(setting) {
  if (setting.options) {
    return `<br><strong>Options:</strong><br> ${Object.keys(setting.getOptions()).join('  |  ')}`;
  }
  return '';
}

export const PatternProperties: FC<Props> = props => {
  const context = useContext(DocsContext);
  const { story } = props;
  const contextStory = getContextualStory(context, story);
  const properties: any = {};
  if (contextStory !== undefined) {
    const { patternVariant } = contextStory.parameters.docs;

    const fields = patternVariant.getFields();
    properties.Fields = { name: 'Fields', rows: {} };
    Object.keys(fields).forEach(key => {
      const field = fields[key];
      properties.Fields.rows[key] = {
        name: key,
        type: field.getType(),
        description: `<b>[${field.getType()}]</b> ${field.getLabel()} <br> ${
          field.getDescription() != null ? field.getDescription() : ''
        }`,
      };
    });
    const settings = patternVariant.getSettings();
    properties.Settings = { name: 'Settings', rows: {} };
    Object.keys(settings).forEach(key => {
      const setting = settings[key];
      if (setting.isEnable()) {
        properties.Settings.rows[key] = {
          name: setting.getLabel(),
          description: `<b>[${setting.getType()}]</b> ${setting.getLabel()} <br> ${
            setting.getDescription() != null ? setting.getDescription() : ''
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
  }

  return <TabbedArgsTable tabs={properties} />;
};

PatternProperties.displayName = 'PatternProperties';

export default PatternProperties;
