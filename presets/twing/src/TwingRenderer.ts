import { IRenderer, PatternVariant } from '@wingsuit-designsystem/pattern';

export class TwingRenderer implements IRenderer {
  async renderVariant(variant: PatternVariant, variables: any): Promise<string> {
    if (!variant) {
      return 'VARIANT IS NULL';
    }
    if (!variant.getPattern()) {
      return 'UNABLE VARIANT IS NULL';
    }
    if (!variant.getPattern().getTemplate()) {
      return `Template not found for pattern ${variant.getPattern().getUse()}`;
    }
    return variant.getPattern().getTemplate()({ ...variables });
  }
}
