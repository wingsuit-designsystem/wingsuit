import { addToStory, storyKind } from '@wingsuit-designsystem/storybook/story';
import { storiesOf } from '@storybook/react';
import './index';

const story = storiesOf(storyKind('button'), module);

addToStory('button', story);
