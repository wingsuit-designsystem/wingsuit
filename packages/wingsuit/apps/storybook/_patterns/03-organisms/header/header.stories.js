import { renderer } from '@wingsuit-designsystem/pattern';

export default { title: '03-organisms/header' };

const template = require('./header.twig');

export const Header = () => {
  return renderer.renderData('path', template);
};
