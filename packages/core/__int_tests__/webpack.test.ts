import path from 'path';
import { PresetManager, resolveConfig } from '../src/index';
import { TestCase } from './test-case';

class WebpackTest extends TestCase {
  get entry() {
    return '/entry.js';
  }

  get expected() {
    return `FOO`;
  }
}

describe('#Test Webpack config', () => {
  test.each([[{}]])('Check resolve config', async (config: {}) => {
    const testCase = new WebpackTest();
    const presetManager = new PresetManager();
    const resolvedConfig = resolveConfig(
      'drupal',
      'production',
      {},
      {
        designSystems: {
          default: {
            namespaces: {
              molecules: path.resolve(__dirname, '_data/molecules'),
            },
          },
        },
      }
    );
    const webpackConfig = presetManager.generateWebpack(resolvedConfig);
    webpackConfig.resolveLoader.alias['twing-loader'] =
      './packages/core/dist/server/loader/twingLoader.js';
    webpackConfig.entry = path.join(__dirname, './entry.js');
    const directoryPath = webpackConfig.output.path;
    const outputFs = await testCase.compile(webpackConfig);
    const files = outputFs.readdirSync(directoryPath);
    files.forEach(file => {
      // Do whatever you want to do with the file
      // eslint-disable-next-line no-console
      console.log(file);
    });
  });
});
