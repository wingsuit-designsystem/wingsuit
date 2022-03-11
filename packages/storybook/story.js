import { storage } from '@wingsuit-designsystem/pattern';

import { getArgTypes, getArgs } from './dist/storyof';

export function argTypes(patternId, variantId) {
  return getArgTypes(storage.loadVariant(patternId, variantId));
}

export function args(defaultArgs, patternId, variantId) {
  return getArgs(defaultArgs, storage.loadVariant(patternId, variantId));
}
