import { addToStory } from '@wingsuit-designsystem/storybook/story';
import { storiesOf } from '@storybook/react';
import { pattern } from './index';

const story = storiesOf(pattern.getStoryName(), module);

addToStory('button', story);
