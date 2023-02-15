import { RenderTwig } from '@wingsuit-designsystem/pattern-react';
import 'atoms/hamburger';
import 'molecules/card';
import 'atoms/button';
import 'molecules/hero';
import 'atoms/image';
import 'templates/site-container.twig';
import 'organisms/header';
import 'organisms/footer';
import 'organisms/section';

export default {
  title: 'Pages/Homepage',
  parameters: {
    layout: 'fullscreen',
  },
  component: RenderTwig,
};

const template = require('./homepage.twig');

export const Homepage = {
  args: {
    data: template,
  },
};
