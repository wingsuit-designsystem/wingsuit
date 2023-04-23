import * as path from 'path';
import FileDependencyPlugin from '../src/plugins/FileDependencyPlugin';

describe('#Test FileDependencyPlugin', () => {
  test('buildPatternNamespaceMap.', () => {
    const namespaces = {
      atoms: path.join(__dirname, '_data/atoms'),
      molecules: path.join(__dirname, '_data/molecules'),
    };
    const fileDependencyPlugin = new FileDependencyPlugin('', namespaces);
    const map = fileDependencyPlugin.buildPatternNamespaceMap();
    expect(map).toEqual({
      card: 'molecules/card/card.wingsuit.yml',
      spacing: 'molecules/spacing/spacing.wingsuit.yml',
    });
  });
});
