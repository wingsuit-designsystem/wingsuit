import { RenderTwig } from '@wingsuit-designsystem/pattern-react';
import 'templates/article';

export default {
  title: 'Pages/Article',
  parameters: {
    layout: 'fullscreen',
  },
  component: RenderTwig,
};

const template = require('./article.twig');

export const Article = {
  args: {
    data: template,
  },
};
// export const Article = () => <RenderTwig data={template}></RenderTwig>;
