import { RenderTwig } from '@wingsuit-designsystem/storybook';
import React from 'react';
import 'templates/article';

export default {
  title: 'Pages/Article',
  parameters: {
    layout: 'fullscreen',
  },
};

const template = require('./article.twig');

export const Article = () => <RenderTwig data={template}></RenderTwig>;
