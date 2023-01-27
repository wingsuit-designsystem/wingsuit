import { PatternVariant } from './index';

export default interface IRenderer {
  renderVariant(variant: PatternVariant, variables: {}): Promise<string>;
}
