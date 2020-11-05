import PatternVariant from '../src/PatternVariant';
import Pattern from '../src/Pattern';
import PatternStorage from '../src/PatternStorage';

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
});
