import { IRenderer, PatternVariant } from '@wingsuit-designsystem/pattern';
export declare class TwingRenderer implements IRenderer {
    renderVariant(variant: PatternVariant, variables: any): Promise<string>;
}
