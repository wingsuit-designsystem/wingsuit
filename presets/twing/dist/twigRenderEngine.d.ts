import IRenderer from './IRenderer';
export declare function setRenderer(renderer: IRenderer): void;
export declare function getRenderer(): IRenderer;
export declare function getPatternConfiguration(patternId: string, variantId: string | undefined, configuration: string): Promise<string>;
export declare function twingMapToArray(variables: any): string[];
export declare function renderPatternPreview(patternId: string, variables?: {}, variantId?: string, renderInfoContext?: {}): Promise<string>;
export declare function renderPattern(patternId: string, variables?: {}, variantId?: string): Promise<string>;
export declare function renderData(path: string, template: string, variables?: {}): any;
export declare function renderTemplate(path: string, variables?: {}): any;
