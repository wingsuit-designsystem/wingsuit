import { addToStory, storyKind } from '@wingsuit-designsystem/storybook';
import { storiesOf } from '@storybook/react';
import './index';

const story = storiesOf(storyKind('button'), module);

addToStory('button', story);
