import { Source } from '@storybook/components';

import React, { FunctionComponent } from 'react';

import { PatternVariant } from '@wingsuit-designsystem/pattern';

type Props = { variant: PatternVariant };

export const PatternInclude: FunctionComponent<Props> = (props: Props) => {
  const { variant } = props;
  const variables = variant.getVariables();
  // eslint-disable-next-line
  delete variables['attributes'];

  Object.keys(variables).forEach(key => {
    if (variables[key] == null || variables[key] === '') {
      delete variables[key];
    }
  });
  Object.keys(variant.getPreviewPatterns()).forEach(key => {
    variables[key] = null;
  });
  const code = `{% include "${variant.getPattern().getUse()}" with ${JSON.stringify(
    variables,
    null,
    2
  )} %}`;
  return (
    <>
      <Source format={false} dark code={code} language="twig" />
    </>
  );
};
