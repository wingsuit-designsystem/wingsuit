import { renderer } from '@wingsuit-designsystem/pattern';

export default { title: '03-organisms/footer' };

const template = require('./footer.twig');

export const Footer = () => {
  return renderer.renderData('path', template);
};
