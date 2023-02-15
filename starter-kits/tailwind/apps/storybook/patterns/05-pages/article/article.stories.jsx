import React from 'react';
import { RenderTwig } from '@wingsuit-designsystem/pattern-react';
import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title,
} from '@storybook/addon-docs';

import 'templates/article';
import 'templates/site-container.twig';
import 'organisms/container';

const parameters = {
  docs: {
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <ArgsTable story={PRIMARY_STORY} />
        <Stories />
      </>
    ),
  },
};

export default {
  title: 'Pages/Article',
  component: RenderTwig,
  parameters,
};

const template = require('./article.twig');

export const Article = {
  args: {
    data: template,
  },
};
