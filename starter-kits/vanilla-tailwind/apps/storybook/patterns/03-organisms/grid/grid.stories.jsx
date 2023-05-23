import { RenderTwig } from '@wingsuit-designsystem/pattern-react';
import React from 'react';

export default {
  title: 'organisms/Grid',
  parameters: {
    layout: 'fullscreen',
  },
};

const template = require('./grid-samples.twig');

export const Samples = () => <RenderTwig data={template}></RenderTwig>;
