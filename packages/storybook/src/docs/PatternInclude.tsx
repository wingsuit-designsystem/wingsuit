import { Source } from '@storybook/components';

import React, { useContext, FunctionComponent } from 'react';

import { DocsContext, StoryData } from '@storybook/addon-docs/blocks';

import { getContextualStory } from './utils';

type Props = { story?: StoryData };

export const PatternInclude: FunctionComponent<Props> = props => {
  const context = useContext(DocsContext);
  const { story } = props;
  const contextStory = getContextualStory(context, story);
  if (contextStory == null) {
    return null;
  }
  const { patternVariant } = contextStory.parameters.docs;

  const code = `{% include "${patternVariant.getPattern().getUse()}" with ${JSON.stringify(
    patternVariant.getVariables(false)
  )} %}`;
  return (
    <>
      <Source dark code={code} />
    </>
  );
};
