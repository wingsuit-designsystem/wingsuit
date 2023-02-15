import { addApp } from '../src/config-parser';

describe('configParser test', () => {
  test('Test addApp with no app key.', () => {
    const source =
      'module.exports = {\n' +
      "  presets: ['@wingsuit-designsystem/preset-tailwind2'],\n" +
      '  apps: {\n' +
      '  },\n' +
      '  designSystems: {\n' +
      '    default: {\n' +
      '      namespaces:{},\n' +
      '    },\n' +
      '  },\n' +
      '};\n';
    const resultString = addApp('test', 'test', [{ name: 'path', value: 'path' }], source);
    // eslint-disable-next-line no-eval
    const result = eval(resultString);
    expect(result.apps.test.path).toBe('path');
    expect(result.apps.test.type).toBe('test');
  });
  test('Test addApp with without app key.', () => {
    const source =
      'module.exports = {\n' +
      "  presets: ['@wingsuit-designsystem/preset-tailwind2'],\n" +
      '  designSystems: {\n' +
      '    default: {\n' +
      '      namespaces:{},\n' +
      '    },\n' +
      '  },\n' +
      '};\n';
    const resultString = addApp('test', 'test', [{ name: 'path', value: 'path' }], source);
    // eslint-disable-next-line no-eval
    const result = eval(resultString);
    expect(result.apps.test.path).toBe('path');
    expect(result.apps.test.type).toBe('test');
  });
});
