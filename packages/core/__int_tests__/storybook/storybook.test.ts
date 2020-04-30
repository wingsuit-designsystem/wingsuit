import { getAppPack } from '../../src/index';

describe('PatternStorage', () => {
  describe('#storybook configuration', () => {
    test('Generate Storybook config.', () => {
      const webpack = getAppPack('development', module);
      console.log(webpack);
    });
  });
});