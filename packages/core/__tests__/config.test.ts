import {resolveConfig} from '../src/index';
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

describe('#Test config', () => {
  test('Check merged configs.', () => {
    const appConfig = resolveConfig("storybook", 'development', {}, config);
    expect(appConfig.environment).toBe("development");
    expect(appConfig.absAppPath).toBe(__dirname);
    expect(appConfig.absRootPath).toBe(process.cwd());
    expect(appConfig.absDesignSystemPath).toBe(path.join(process.cwd(), "/source/default"));
  });
});