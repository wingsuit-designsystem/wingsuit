import { renderer } from '@wingsuit-designsystem/pattern';

export default { title: '05-pages/Article' };

const template = require('./article.twig');

export const Article = () => {
  return renderer.renderData('path', template);
};
