export default { title: '05-pages/Article' };
import {twigRenderEngine} from '@wingsuit-designsystem/pattern';

export const Article = () => {
  return twigRenderEngine.renderData('path', require('./article.twig'));
};

