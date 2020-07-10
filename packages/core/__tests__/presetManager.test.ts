import path from 'path';
import { resolveConfig, PresetManager } from '../src/index';

const config = {
  webpack: (appConfig) => {
    return { testWebpack: true };
  },
  webpackFinal: (appConfig, webpack) => {
    // eslint-disable-next-line no-param-reassign
    webpack.testWebpackFinal = true;
    return webpack;
  },
  designSystems: {
    default: {
      namespaces: {
        atoms: path.resolve(__dirname, '../source/atoms'),
      },
    },
  },
};

test('Test generateWebpack.', () => {
  const presetManager = new PresetManager();
  const appConfig = resolveConfig('storybook', 'development', {}, config);
  const webpack = presetManager.generateWebpack(appConfig);
  expect(webpack.testWebpack).toBe(true);
  expect(webpack.testWebpackFinal).toBe(true);
});
