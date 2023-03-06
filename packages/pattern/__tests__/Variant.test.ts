import Pattern from '../src/Pattern';
import PatternStorage from '../src/PatternStorage';
import { IPatternDefinition } from '../src';

describe('Variant test', () => {
  test('Test variant properties.', () => {
    const definition = {
      id: 'test',
      description: 'test-description',
      namespace: 'atoms/atoms',
      label: 'test-label',
      use: '@test/test',
      fields: {},
      settings: {},
      parameters: [],
      visible: 'storybook',
      configuration: {},
    };
    const storage: PatternStorage = new PatternStorage();

    const pattern: Pattern = new Pattern('pattern', definition, storage);
    const variant = pattern.getDefaultVariant();
    expect(variant.getLabel()).toBe('test-label');
    expect(pattern.getDescription()).toBe('test-description');
    expect(variant.getDescription()).toBe('');
    expect(variant.getId()).toBe('__default');
    expect(variant.getUse()).toBe('@test/test');
    expect(variant.getStoryId()).toBe('atoms-atoms-test-label--test-label');
  });
  test('Test variant configruation.', () => {
    const definition: IPatternDefinition = {
      id: 'test',
      description: 'test-description',
      namespace: 'atoms/atoms',
      label: 'test-label',
      use: '@test/test',
      fields: {},
      settings: {
        setting_simple: {
          label: 'Simple',
          type: 'select',
          options: {
            options1s: 'options1s',
            options2s: 'options2s',
          },
        },
        setting_with_config: {
          label: 'With config',
          type: 'select',
          options: {
            options1w: {
              label: 'options1w',
              configuration: 'config 1',
            },
            options2w: {
              label: 'options2w',
              configuration: 'config 2',
            },
          },
        },
      },
      parameters: [],
      visible: 'storybook',
      configuration: {},
    };
    const storage: PatternStorage = new PatternStorage();

    const pattern: Pattern = new Pattern('pattern', definition, storage);
    expect(pattern.getDefaultVariant().getSetting('setting_simple').getOptions()).toStrictEqual({
      options1s: 'options1s',
      options2s: 'options2s',
    });

    expect(
      pattern.getDefaultVariant().getSetting('setting_with_config').getOptions()
    ).toStrictEqual({
      options1w: 'options1w',
      options2w: 'options2w',
    });
    expect(pattern.getDefaultVariant().getConfiguration()).toStrictEqual({
      setting_with_config: {
        options1w: 'config 1',
        options2w: 'config 2',
      },
    });
  });
});
