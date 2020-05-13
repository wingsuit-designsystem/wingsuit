import React, {useContext, FunctionComponent} from 'react';

import {
  DocsContext,
  DocsStory,
  Heading,
  DocsStoryProps,
} from '@storybook/addon-docs/blocks';
import {PatternInclude} from "./PatternInclude";
import {
  getDocsStories
} from './utils';
import PatternProperties from "./PatternProperties";

interface StoriesProps {
  title?: JSX.Element | string;
  includePrimary?: boolean;
}


export const PatternStories: FunctionComponent<StoriesProps> = ({title, includePrimary = false}) => {
  const context = useContext(DocsContext);
  const componentStories = getDocsStories(context);

  let stories: DocsStoryProps[] = componentStories;
  if (!includePrimary) stories = stories.slice(1);

  if (!stories || stories.length === 0) {
    return null;
  }
  return (
    <>
      <Heading>Pattern Variants</Heading>
      {stories.map((story) => {
        return <>
          <DocsStory withToolbar={true} key={story.id} {...story} expanded/>
          <PatternProperties story={story}></PatternProperties>
          <PatternInclude story={story}></PatternInclude>
          </>
      })}
    </>
  );
};

PatternStories.defaultProps = {
  title: 'PatternStories',
};
