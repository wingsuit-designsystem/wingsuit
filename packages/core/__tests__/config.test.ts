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
  presets: [{}],
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
    storybook2: {
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

describe('#Test storybook config', () => {
  test.each([
    [config_1, 7],
    [config_2, 9],
    [config_3, 8],
  ])('Check resolve config', (config: {}, presetsLength) => {
    const appConfig = resolveConfig('storybook', 'development', {}, config);
    expect(appConfig.environment).toBe('development');
    expect(appConfig.absAppPath).toBe(__dirname);
    expect(appConfig.absRootPath).toBe(process.cwd());
    expect(appConfig.presets.length).toBe(presetsLength);
    expect(appConfig.absDesignSystemPath).toBe(path.join(process.cwd(), '/source/default'));
  });
});

test('#Test config type', () => {
  const appConfig = resolveConfig('storybook2:storybook', 'development', {}, config_3);
  expect(appConfig.environment).toBe('development');
  expect(appConfig.absAppPath).toBe(__dirname);
  expect(appConfig.absRootPath).toBe(process.cwd());
  expect(appConfig.absDesignSystemPath).toBe(path.join(process.cwd(), '/source/default'));
});

test('#Test default config', () => {
  const name = 'undefined';
  const appConfig = resolveConfig(name, 'development', {}, config_3);
  expect(appConfig.environment).toBe('development');
  expect(appConfig.absAppPath).toBe(`${process.cwd()}/apps/${name}`);
  expect(appConfig.absRootPath).toBe(process.cwd());
  expect(appConfig.absDistFolder).toBe(`${process.cwd()}/dist/app-${name}`);
  expect(appConfig.absDesignSystemPath).toBe(path.join(process.cwd(), '/source/default'));
});
