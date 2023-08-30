import path from 'path';
import { resolveConfig, stories } from '../src';

const DemoBundle = {
  name: () => {
    return 'demo_bundle';
  },
  stories: () => {
    return ['demo'];
  }
};
const ExcludeBundle = {
  name: () => {
    return 'exclude_bundle';
  },
  stories: () => {
    return ['exclude'];
  }
};
const config = {
  presets: [DemoBundle, ExcludeBundle],
  apps: {
    storybook: {
      path: 'packages/core/__tests__',
      presets: [],
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

test('#Test stories', () => {
  const appConfig = resolveConfig('storybook', 'development', {},  config);
  const resultStories  = stories(appConfig, []);
  expect(resultStories.includes('demo')).toBe(true);
  expect(resultStories.includes('exclude')).toBe(true);
  const resultExcludeStories  = stories(appConfig, ['exclude_bundle']);
  expect(resultExcludeStories.includes('demo')).toBe(true);
  expect(resultExcludeStories.includes('exclude')).toBe(false);
});
