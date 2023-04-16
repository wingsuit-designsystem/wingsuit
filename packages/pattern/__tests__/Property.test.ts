import Field from '../src/Field';

describe('Property test', () => {
  test('Faker should print a word.', () => {
    const field: Field = new Field('test', 'test', 'Test', '', {
      faker: { property: 'name.lastName' },
    });
    const output = field.getPreview();
    expect(output).not.toBeNull();
  });
  test('Invalid faker configuration.', () => {
    const field: Field = new Field('test', 'test', 'Test', '', {
      faker: { property: 'nams.lastName' },
    });
    const output = field.getPreview();
    expect(output).toContain('Invalid faker token: nams.lastName. Valid tokens are:');
  });
});
