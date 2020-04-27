import * as path from 'path';
import Wingsuit from "../../src/Wingsuit";
import RootConfig from "../../src/RootConfig";
import StorybookApp from "../../src/StorybookApp";
import AppConfig from "../../src/AppConfig";
import IApp from "../../src/IApp";

describe('PatternStorage', () => {
  let wingsuit: Wingsuit;
  describe('#storybook configuration', () => {
    test('Generate Storybook config.', () => {
      wingsuit = new Wingsuit()
      const webpack = wingsuit.generateWebpack('development', module, {});
      console.log(webpack);
    });
  });
});