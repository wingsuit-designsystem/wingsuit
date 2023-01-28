import fs from 'fs';
import * as path from 'path';
import { findLinkedPatternIds } from '../src/server/loader/wingsuitLoader';

const YAML = require('yaml');

describe('#Test wingsuit loader', () => {
  test('Test findRelatedPatternIds.', () => {
    const src = fs.readFileSync(
      path.join(__dirname, '_data/molecules/card/card.wingsuit.yml'),
      'utf-8'
    );
    const res = YAML.parse(src);
    const result = findLinkedPatternIds(res.card);
    expect(result).toEqual([
      'pattern_dependency',
      'pattern_extends',
      'pattern_single',
      'pattern_multi',
      'variant_pattern_single',
      'single_inner',
      'single_inner_inner',
    ]);

    const srcSpacing = fs.readFileSync(
      path.join(__dirname, '_data/molecules/spacing/spacing.wingsuit.yml'),
      'utf-8'
    );
    const resSpacing = YAML.parse(srcSpacing);
    const resultSpacing = findLinkedPatternIds(resSpacing.spacing);
    expect(resultSpacing).toEqual([]);
  });
});
