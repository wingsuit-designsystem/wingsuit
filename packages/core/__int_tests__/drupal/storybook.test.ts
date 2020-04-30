import * as path from 'path';
import Server from "../../src/server/Server";
import RootConfig from "../../src/server/RootConfig";
import StorybookApp from "../../src/server/StorybookApp";
import AppConfig from "../../src/server/AppConfig";
import ConfigBundle from "../../src/server/ConfigBundle";

describe('PatternStorage', () => {
  let wingsuit: Server;
  describe('#storybook configuration', () => {
    test('Generate Storybook config.', () => {
      wingsuit = new Server()
      const webpack = wingsuit.generateWebpack('development', module, {});
      console.log(webpack);
    });
  });
});