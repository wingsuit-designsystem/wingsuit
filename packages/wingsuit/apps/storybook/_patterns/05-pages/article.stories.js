export default { title: '04-templates/Article' };
import {twigRenderEngine} from '@wingsuit-designsystem/pattern';

export const Article = () => {
  return twigRenderEngine.renderData('path', require('./article.twig'));
};
