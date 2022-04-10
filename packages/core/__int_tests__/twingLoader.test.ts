import path from 'path';
import { PresetManager, resolveConfig } from '../src/index';
import { TestCase } from './test-case';

class TwingLoaderTest extends TestCase {
  get entry() {
    return '/entry.js';
  }

  get expected() {
    return `FOO`;
  }
}

beforeEach(function () {
  jest.setTimeout(20000); // ms
});
describe('#Test Webpack config', () => {
  test.each([[{}]])('Check resolve config', async (config: {}) => {
    const testCase = new TwingLoaderTest();
    const presetManager = new PresetManager();
    const resolvedConfig = resolveConfig(
      'test',
      'development',
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

    const sleep = (milliseconds) => {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };
    const webpackConfig = presetManager.generateWebpack(resolvedConfig);
    webpackConfig.resolveLoader.alias['twing-loader'] =
      './packages/core/dist/server/loader/twingLoader.js';
    webpackConfig.entry = path.join(__dirname, './entry.js');
    const directoryPath = webpackConfig.output.path;
    const outputFs = await testCase.compile(webpackConfig);
    await sleep(2000);
    const files = outputFs.readdirSync(directoryPath);
    files.forEach((file) => {
      console.log(file);
    });
  });
});
