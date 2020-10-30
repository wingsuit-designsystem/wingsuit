import { Source } from '@storybook/components';

import React, { FunctionComponent } from 'react';

import {PatternVariant} from "@wingsuit-designsystem/pattern";

type Props = { variant: PatternVariant };

export const PatternInclude: FunctionComponent<Props> = (props:Props) => {

  const {variant} = props;
  const code = `{% include "${variant.getPattern().getUse()}" with ${JSON.stringify(
    variant.getVariables()
  )} %}`;
  return (
    <>
      <Source dark code={code} />
    </>
  );
};
