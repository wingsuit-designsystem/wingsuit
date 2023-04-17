import * as path from 'path';
import FileDependencyPlugin from '../src/plugins/FileDependencyPlugin';

describe('#Test wingsuit loader', () => {
  test('Test patternNamespaceMap.', () => {
    const namespaces = {
      atoms: path.join(__dirname, '_data/atoms'),
      molecules: path.join(__dirname, '_data/molecules'),
    };
    const fileDependencyPlugin = new FileDependencyPlugin('', namespaces);
    const map = fileDependencyPlugin.buildPatternNamespaceMap();
    expect(map).toEqual({
      button: 'atoms/button/button.wingsuit.yml',
      card: 'molecules/card/card.wingsuit.yml',
      check: 'molecules/tests/check.wingsuit.yml',
      spacing: 'molecules/spacing/spacing.wingsuit.yml',
    });
  });
});
