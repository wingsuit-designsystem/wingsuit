import React from 'react';
import { PatternPreview } from '@wingsuit-designsystem/pattern-react';

import './index';


import './button.wingsuit.yml';

export default {
  title: 'atoms/Button',
  component: PatternPreview,
};
export const wingsuit = {
  render: () => <PatternPreview patternId="button" variantId="default" />,
};
