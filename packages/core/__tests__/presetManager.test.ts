import path from 'path';
import { resolveConfig, PresetManager } from '../src/index';

const config = {
  webpack: appConfig => {
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
          supportFeature: name => {
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
