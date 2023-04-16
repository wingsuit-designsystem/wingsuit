// eslint-disable-next-line import/no-extraneous-dependencies
import { csfParser } from '@wingsuit-designsystem/storybook';

export default function wingsuitStoriesLoader(this: any, src) {
  const options = this.getOptions();
  const { resourcePath } = this;
  const { appConfig } = options;
  return csfParser(resourcePath, src, appConfig, this);
}
