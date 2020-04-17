import { PatternStorage } from './index';
const patternStorage = new PatternStorage('./tests/_silo/patterns.json');

// eslint-disable-next-line no-undef
test('test', () => {
  patternStorage.load('button');
});
