import { csfParser } from '../csfParser';

export default function wingsuitStoriesLoader(this: any, src) {
  const options = this.getOptions();
  const { resourcePath } = this;
  const { appConfig } = options;
  const { namespaces } = appConfig;
  return csfParser(resourcePath, src, namespaces);
}
