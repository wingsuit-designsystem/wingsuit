import { TwingEnvironment, TwingLoaderArray } from 'twing';
import { storage, TwingRenderer, initEnvironment, renderer } from './index';

// eslint-disable-next-line no-console
console.info('Wingsuit Twing Default Environment');

class Loader extends TwingLoaderArray {
  constructor(templates) {
    super([]);
    // @ts-ignore
    this.templates = templates;
  }
}
const loader = new Loader(storage.getTwigResources());
const environment = new TwingEnvironment(loader, { autoescape: false, debug: true });
initEnvironment(environment);
renderer.setRenderer(new TwingRenderer(environment));
