import { IRenderer, PatternVariant } from './index';

/**
 * Twig default renderer.
 *
 * Overwrite the renderer inside the twigRenderEngine.
 * Use renderer.setRenderer(new TwigCustomRenderer)
 * if you need a differnt render logic. This renderer works
 * with twigjs as well with twing.
 */
export class TwigDefaultRenderer implements IRenderer {
  async renderVariant(variant: PatternVariant, variables: any): Promise<string> {
    if (!variant) {
      return 'Error while render variant. Variant is null.';
    }
    if (variant.getTemplate()) {
      return variant.getTemplate()({ ...variables });
    }
    if (!variant.getPattern()) {
      return `Error while render variant. Pattern is null. [ID: ${variant.getId()}]`;
    }

    if (!variant.getPattern().getTemplate()) {
      return `Error while render variant. Template not linked pattern [ID: ${variant
        .getPattern()
        .getId()}, PATH: ${variant.getPattern().getUse()}]`;
    }
    return variant.getPattern().getTemplate()({ ...variables });
  }
}
