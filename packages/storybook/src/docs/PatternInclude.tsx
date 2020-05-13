import { Source } from '@storybook/components';

import React, {useContext, FunctionComponent} from 'react';

import {
  DocsContext,
  StoryData,
} from '@storybook/addon-docs/blocks';

import {
  getContextualStory,
} from './utils';
import {PatternVariant} from "@wingsuit-designsystem/pattern";

type Props = { story?: StoryData };


export const PatternInclude: FunctionComponent<Props> = (props) => {
  const context = useContext(DocsContext);
  const story = getContextualStory(context, props.story);
  if (story == null) {
    return null;
  }
  const patternVariant: PatternVariant = story.parameters.docs.patternVariant;

  const code = `{% include "${patternVariant.getPattern().getUse()}" with ${JSON.stringify(patternVariant.getVariables(false))}`;
  return (
    <>
      <Source dark={true} code={code}></Source>
    </>
  );
};

