import { renderer } from '@wingsuit-designsystem/pattern';

export default { title: '05-pages/homepage' };

const template = require('./homepage.twig');

export const Homepage = () => {
  return renderer.renderData('path', template);
};
