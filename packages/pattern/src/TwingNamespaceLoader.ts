import { TwingLoaderArray, TwingSource } from "twing";
import { storage } from './index';

/**
 * Loads template from pattern storage.
 */
export class NamespaceLoader extends TwingLoaderArray {
  getCacheKey(name: string, from: TwingSource): string {
    return name;
  }

  getSourceContext(name: string, from: TwingSource): TwingSource {
    const twigSource:any|null = storage.findTwigByNamespace(name);
    if (twigSource != null && twigSource.default !== null) {
      return new TwingSource(twigSource.default, name, name);
    }
    return new TwingSource(`Template ${name} not loaded. Check require.context in your configure.js`, name, name);
  }
}