import path from 'path';
import { resolveConfig } from '../src/index';

const config_1 = {
  apps: {
    storybook: {
      path: 'packages/core/__tests__',
    },
  },
  designSystems: {
    default: {
      namespaces: {
        atoms: path.resolve(__dirname, '../source/atoms'),
      },
    },
  },
};

const config_2 = {
  presets: ['babel'],
  apps: {
    storybook: {
      path: 'packages/core/__tests__',
      presets: ['DefaultBundle'],
    },
  },
  designSystems: {
    default: {
      namespaces: {
        atoms: path.resolve(__dirname, '../source/atoms'),
      },
    },
  },
};

const config_3 = {
  apps: {
    storybook: {
      path: 'packages/core/__tests__',
      presets: ['AddonBundle'],
    },
  },
  designSystems: {
    default: {
      namespaces: {
        atoms: path.resolve(__dirname, '../source/atoms'),
      },
    },
  },
};

describe('#Test config', () => {
  test.each([
    [config_1, 7],
    [config_2, 9],
    [config_3, 8],
  ])('Render pattern %p variant %p', (config: {}, presetsLength) => {
    const appConfig = resolveConfig('storybook', 'development', {}, config);
    expect(appConfig.environment).toBe('development');
    expect(appConfig.absAppPath).toBe(__dirname);
    expect(appConfig.absRootPath).toBe(process.cwd());
    expect(appConfig.presets.length).toBe(presetsLength);
    expect(appConfig.absDesignSystemPath).toBe(path.join(process.cwd(), '/source/default'));
  });
});
