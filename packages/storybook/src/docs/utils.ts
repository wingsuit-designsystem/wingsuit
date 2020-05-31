import { DocsContextProps, StoryData } from '@storybook/addon-docs/blocks';

export const getContextualStory = (context: DocsContextProps, story?: StoryData): StoryData => {
  const stories = getDocsStories(context);
  return story != null ? story : stories[0];
};

export const getDocsStories = (context: DocsContextProps): StoryData[] => {
  const { storyStore, kind } = context;

  if (!storyStore) {
    return [];
  }
  return storyStore
    .getStoriesForKind(kind)
    .filter((s: any) => !(s.parameters && s.parameters.docs && s.parameters.docs.disable));
};
