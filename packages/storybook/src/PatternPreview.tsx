import React, { FunctionComponent } from 'react';
import {renderer} from '@wingsuit-designsystem/pattern';

type Props =  {patternId, variantId};

const PatternPreview: FunctionComponent<Props> = ({ patternId, variantId, ...variables }) => (
  <div dangerouslySetInnerHTML={{ __html: renderer.renderPatternPreview(patternId, variantId, variables) }} />
);

PatternPreview.displayName = 'PatternPreview';

export default PatternPreview;
