import { resolveConfig, getAppPack } from '../../src/index';
import path from "path";

const config = {
  apps: {
    storybook: {
      path: 'packages/core/__tests__'
    }
  },
  designSystems: {
    default: {
      namespaces: {
        atoms: path.resolve(__dirname, '../source/atoms'),
      }
    }
  }
};

describe('getAppPack', () => {
  test('Load appPack.', () => {
    const webpack = getAppPack(resolveConfig("storybook", "development", {}, config), []);
    console.log(webpack);
  });
});