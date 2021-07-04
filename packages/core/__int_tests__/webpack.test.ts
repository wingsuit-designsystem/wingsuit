import path from 'path';
import assert = require('assert');
import { PresetManager, resolveConfig } from '../src';

const webpack = require('webpack');

test('Test CMS Preset.', () => {
  const presetManager = new PresetManager();
  const resolvedConfig = resolveConfig(
    'cms',
    'development',
    {},
    {
      designSystems: {
        default: {
          namespaces: {
            atoms: path.resolve(__dirname, '../source/atoms'),
          },
        },
      },
    },
    `${__dirname}/data`
  );
  const webpackConfig = presetManager.generateWebpack(resolvedConfig);
  const compiler = webpack(webpackConfig);
  expect(webpack.environment).toBe('develop');
  compiler.run((err, stats) => {
    // [Stats Object](#stats-object)
  });
});
