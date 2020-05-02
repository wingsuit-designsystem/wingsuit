import { TwingLoaderArray, TwingSource } from "twing";


/**
 * Loads template from a user defined function (made for the browser).
 *
 * @author Noel Schenk <schenknoel@gmail.com>
 */
export class NamespaceLoader extends TwingLoaderArray {
  resolve(name: string, from: TwingSource): string {
    const parent = super.resolve(name, from);
    console.log('resolve' + parent);
    return parent;
  }

  getCacheKey(name: string, from: TwingSource): string {
    return "/home/cw/projects/wingsuit/wingsuit/packages/wingsuit/source/default/_patterns/03-organims/_header.twig"
  }
  getSourceContext(name: string, from: TwingSource): TwingSource {
    const source = super.getSourceContext(name, from);
    console.log('getSourceContext' + source);
    debugger;
    return source;
  }
}