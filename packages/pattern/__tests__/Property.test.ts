import Field from "../src/Field";

describe("Property test", () => {
  test('Faker should print a word.', function () {
    const field :Field = new Field("test", "test", "Test", "", {'faker': {'property': 'name.lastName'}});
    const output = field.getPreview();
    expect(output).not.toBeNull();
  });
  test('Invalid faker configuration.', function () {
    const field :Field = new Field("test", "test", "Test", "", {'faker': {'property': 'nams.lastName'}});
    const output = field.getPreview();
    expect(output).toBe('Invalid faker configuration \"{{nams.lastName}}\". Invalid module: nams' +
      '');
  });
});