import Setting from '../src/Setting';

describe('Setting test', () => {
  test('Test Setting.', () => {
    const setting: Setting = new Setting('test', 'select', 'Test', '', 'key');
    setting.setOptions({
      key: 'value',
      key2: 'value2',
    });
    expect(setting.isRequired()).toBe(false);
    expect(setting.getPreview()).toBe('key');
    const value = setting.getPreviewDisplayValue();
    expect(value).toBe('value');
    const key = setting.getOptionKeyByLabel(value);
    expect(key).toBe('key');
  });
});
