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
      startup: (appConfig) => {
        return 'startup';
      },
    },
    storybook2: {
      path: 'packages/core/__tests__',
      presets: ['AddonBundle'],
    },
    storybook3: {
      type: 'storybook',
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
    [config_1, 6],
    [config_2, 8],
    [config_3, 7],
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

  const appConfigWithType = resolveConfig('storybook3:storybook', 'development', {}, config_3);
  expect(appConfigWithType.environment).toBe('development');
  expect(appConfigWithType.absAppPath).toBe(__dirname);
  expect(appConfigWithType.absRootPath).toBe(process.cwd());
  expect(appConfigWithType.absDesignSystemPath).toBe(path.join(process.cwd(), '/source/default'));
});

test('#Test startup()', () => {
  const appConfig = resolveConfig('storybook', 'development', {}, config_3);
  expect(appConfig.environment).toBe('development');
  expect(appConfig.startup()).toBe('startup');
});

test('#Test component types', () => {
  const appConfig = resolveConfig('storybook', 'development', {}, config_3);
  expect(Object.keys(appConfig.componentTypes).length).toBe(5);
  expect(appConfig.startup()).toBe('startup');
});

test('#Test unknown config', () => {
  function unknownApp() {
    const name = 'undefined';
    resolveConfig(name, 'development', {}, config_3);
  }

  expect(unknownApp).toThrowError(
    new Error('App undefined not found. Check your apps section in your wingsuit.config.js')
  );
});
