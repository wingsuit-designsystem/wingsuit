import { TwingEnvironment } from 'twing';
import IRenderer from './IRenderer';

export class TwingRenderer implements IRenderer {
  private environment;

  constructor(environment: TwingEnvironment) {
    this.environment = environment;
  }

  async render(id: string, include: string, variables: {}): Promise<string> {
    return this.environment.render(include, variables);
  }
}
