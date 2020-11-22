import { RenderTwig } from '@wingsuit-designsystem/storybook';
import React from 'react';
import 'atoms/hamburger';
import 'atoms/image';
import 'organisms/header';

export default {
  title: 'Pages/Homepage',
  parameters: {
    layout: 'fullscreen',
  },
};

const template = require('./homepage.twig');

export const Homepage = () => <RenderTwig data={template}></RenderTwig>;
