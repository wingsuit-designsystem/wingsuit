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

test('Test parameters in wingsuit.config.', () => {
  const presetManager = new PresetManager();
  const resolvedConfig = resolveConfig(
    'storybook',
    'development',
    {},
    {
      parameters: {
        param: {
          param1: true,
        },
      },
      presets: [
        {
          name: (appConfig) => {
            return 'param';
          },
          webpack: (appConfig, pconfig) => {
            return { testWebpack: pconfig.param1, testWebpackFalse: pconfig.param2 };
          },
        },
      ],
      designSystems: {
        default: {
          namespaces: {
            atoms: path.resolve(__dirname, '../source/atoms'),
          },
        },
      },
    }
  );
  const webpack = presetManager.generateWebpack(resolvedConfig);
  expect(webpack.testWebpack).toBe(true);
  expect(webpack.testWebpackFalse).toBe(undefined);
});

test('Test getDefaultPreset.', () => {
  const presetManager = new PresetManager();
  const css = presetManager.getDefaultPreset('css');
  expect(css).not.toBe(null);
});
test('Test defaultConfig.', () => {
  const presetManager = new PresetManager();
  const resolvedConfig = resolveConfig(
    'storybook',
    'development',
    {},
    {
      presets: [
        {
          defaultConfig: (appConfig) => {
            return {
              param1: true,
            };
          },
          name: (appConfig) => {
            return 'param';
          },
          webpack: (appConfig, pconfig) => {
            return { testWebpack: pconfig.param1, testWebpackFalse: pconfig.param2 };
          },
        },
      ],
      designSystems: {
        default: {
          namespaces: {
            atoms: path.resolve(__dirname, '../source/atoms'),
          },
        },
      },
    }
  );
  const webpack = presetManager.generateWebpack(resolvedConfig);
  expect(webpack.testWebpack).toBe(true);
  expect(webpack.testWebpackFalse).toBe(undefined);
});
test('Test initial parameters.', () => {
  const presetManager = new PresetManager();
  const resolvedConfig = resolveConfig(
    'storybook',
    'development',
    {},
    {
      presets: [
        [
          {
            defaultConfig: (appConfig) => {
              return {
                param1: false,
              };
            },
            name: (appConfig) => {
              return 'param';
            },
            webpack: (appConfig, pconfig) => {
              return { testWebpack: pconfig.param1, testWebpackFalse: pconfig.param2 };
            },
          },
          {
            param1: true,
          },
        ],
      ],
      designSystems: {
        default: {
          namespaces: {
            atoms: path.resolve(__dirname, '../source/atoms'),
          },
        },
      },
    }
  );
  const webpack = presetManager.generateWebpack(resolvedConfig);
  expect(webpack.testWebpack).toBe(true);
  expect(webpack.testWebpackFalse).toBe(undefined);
});
test('Test parameter overwrite defaultConfig.', () => {
  const presetManager = new PresetManager();
  const resolvedConfig = resolveConfig(
    'storybook',
    'development',
    {},
    {
      parameters: {
        param: {
          param1: true,
        },
      },
      presets: [
        {
          defaultConfig: (appConfig) => {
            return {
              param1: false,
            };
          },
          name: (appConfig) => {
            return 'param';
          },
          webpack: (appConfig, pconfig) => {
            return { testWebpack: pconfig.param1, testWebpackFalse: pconfig.param2 };
          },
        },
      ],
      designSystems: {
        default: {
          namespaces: {
            atoms: path.resolve(__dirname, '../source/atoms'),
          },
        },
      },
    }
  );
  const webpack = presetManager.generateWebpack(resolvedConfig);
  expect(webpack.testWebpack).toBe(true);
  expect(webpack.testWebpackFalse).toBe(undefined);
});

test('Test generateWebpack.', () => {
  const presetManager = new PresetManager();
  const resolvedConfig = resolveConfig(
    'storybook',
    'development',
    {},
    {
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
    }
  );
  const webpack = presetManager.generateWebpack(resolvedConfig);
  expect(webpack.testWebpack).toBe(true);
  expect(webpack.testWebpackFinal).toBe(true);
});

test('Test support feature.', () => {
  const presetManager = new PresetManager();
  let appConfig = resolveConfig('storybook', 'development', {}, {});
  let supportFeature = presetManager.supportFeature('scss', appConfig);
  expect(supportFeature).toBe(false);

  appConfig = resolveConfig(
    'storybook',
    'development',
    {},
    {
      presets: [
        {
          supportFeature: (name) => {
            if (name === 'scss') {
              return true;
            }
            return false;
          },
        },
      ],
    }
  );
  supportFeature = presetManager.supportFeature('scss', appConfig);
  expect(supportFeature).toBe(true);
  supportFeature = presetManager.supportFeature('scssnone', appConfig);
  expect(supportFeature).toBe(false);
});
