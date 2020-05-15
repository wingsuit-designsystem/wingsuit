import { renderer } from '@wingsuit-designsystem/pattern';

export default { title: '02-molecules/menu' };

const template = require('./menu.twig');

export const PrimaryMenu = () => {
  return renderer.renderData('path', template);
};

export const FooterMenu = () => {
  return renderer.renderData('path', template);
};
