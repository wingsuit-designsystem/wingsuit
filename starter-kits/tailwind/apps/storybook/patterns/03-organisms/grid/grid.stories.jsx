import { RenderTwig } from '@wingsuit-designsystem/pattern-react';
import 'templates/article';

export default {
  title: 'organisms/Grid',
  parameters: {
    layout: 'fullscreen',
  },
  component: RenderTwig,
};

const template = require('./grid-samples.twig');

export const Samples = {
  args: {
    data: template,
  },
};
