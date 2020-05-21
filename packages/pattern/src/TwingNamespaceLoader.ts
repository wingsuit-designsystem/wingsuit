import { TwingLoaderArray, TwingSource } from "twing";
import { storage } from './index';

/**
 * Loads template from pattern storage.
 */
export class TwingNamespaceLoader extends TwingLoaderArray {
  getCacheKey(name: string, from: TwingSource): string {
    return name;
    // return `${name}:${new Date().getTime()}`;
  }

  getSourceContext(name: string, from: TwingSource): TwingSource {
    const realName = name;
    const twigSource:any|null = storage.findTwigByNamespace(realName);
    if (twigSource != null && twigSource.default !== null) {
      return new TwingSource(twigSource.default, realName, realName);
    }
    return new TwingSource(`Template ${realName} not loaded. Check require.context in your configure.js`, name, name);
  }
}