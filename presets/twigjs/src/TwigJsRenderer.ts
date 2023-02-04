import { IRenderer, PatternVariant } from '@wingsuit-designsystem/pattern';

export class TwigJsRenderer implements IRenderer {
  async renderVariant(variant: PatternVariant, variables: any): Promise<string> {
    return variant.getPattern().getTemplate()({ ...variables });
  }
}
