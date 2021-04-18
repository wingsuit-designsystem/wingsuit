import { RenderTwig } from '@wingsuit-designsystem/storybook';
import React from 'react';
import 'atoms/hamburger';
import 'molecules/card';
import 'atoms/button';
import 'molecules/hero';
import 'atoms/image';
import 'organisms/header';
import 'organisms/footer';
import 'organisms/section-code';

export default {
  title: 'Pages/Homepage',
  parameters: {
    layout: 'fullscreen',
  },
};

const template = require('./homepage.twig');

export const Homepage = () => <RenderTwig data={template}></RenderTwig>;
