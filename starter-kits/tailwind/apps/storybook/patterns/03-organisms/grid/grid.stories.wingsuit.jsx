import { RenderTwig } from '@wingsuit-designsystem/storybook';
import React from 'react';
import 'templates/article';

export default {
  title: 'organisms/Grid',
  parameters: {
    layout: 'fullscreen',
  },
};

const template = require('./grid-samples.twig');

export const Samples = () => <RenderTwig data={template}></RenderTwig>;
