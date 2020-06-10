import path from 'path';
import { storage } from '@wingsuit-designsystem/pattern/dist';
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
  apps: {
    storybook: {
      path: 'packages/core/__tests__',
      webpackBundles: ['DefaultBundle'],
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
  extend: {
    apps: {
      storybook: {
        webpackBundles: ['AddonBundle'],
      },
    },
  },
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

describe('#Test config', () => {
  test.each([
    [config_1, 7],
    [config_2, 1],
    [config_3, 8],
  ])('Render pattern %p variant %p', (config: {}, webpackLength) => {
    const appConfig = resolveConfig('storybook', 'development', {}, config);
    expect(appConfig.environment).toBe('development');
    expect(appConfig.absAppPath).toBe(__dirname);
    expect(appConfig.absRootPath).toBe(process.cwd());
    expect(appConfig.webpackBundles.length).toBe(webpackLength);
    expect(appConfig.absDesignSystemPath).toBe(path.join(process.cwd(), '/source/default'));
  });
});
