import './index';
import { PatternPreview } from '@wingsuit-designsystem/pattern-react';

import Button from './button.wingsuit.yml';

export default {
  title: 'atoms/Button',
  component: PatternPreview,
};
export const wingsuit = {
  render: (args) => <PatternPreview patternId="button" variantId="default" />,
};
