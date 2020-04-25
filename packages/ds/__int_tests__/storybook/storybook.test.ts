import * as path from 'path';
import Wingsuit from "../../src/Wingsuit";
import RootConfig from "../../src/RootConfig";
import StorybookApp from "../../src/StorybookApp";
import AppConfig from "../../src/AppConfig";
import IApp from "../../src/IApp";

describe('PatternStorage', () => {
  let wingsuit: Wingsuit = null;

  beforeEach(() => {
    const rootConfig = new RootConfig(path.resolve(__dirname, '../'));
    wingsuit = new Wingsuit(rootConfig);
  });

  describe('#storybook configuration', () => {
    test('Generate Storybook config.', () => {
      const storybookConfig:AppConfig = new AppConfig('storybook', path.resolve(__dirname));
      storybookConfig.namespaces = {
        'atoms': path.resolve(__dirname, '../source/atoms')
      };
      const storybookApp:IApp = new StorybookApp(storybookConfig, wingsuit.rootConfig);
      const config = wingsuit.generateWebpack('development', storybookApp, {});
      console.log(config);
    });
  });
});