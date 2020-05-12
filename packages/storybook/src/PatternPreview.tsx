import React, { FunctionComponent } from 'react';
import {renderer} from '@wingsuit-designsystem/pattern';

type Props =  {patternVariant};


function renderPattern(patternVariant, variables) {
  const pattern = patternVariant.getPattern();
  return renderer.renderPatternPreview(pattern.getId(), patternVariant.getVariant(), variables);
}

const PatternPreview: FunctionComponent<Props> = ({ patternVariant, ...variables }) => (
  <div dangerouslySetInnerHTML={{ __html: renderPattern(patternVariant, variables) }} />
);

PatternPreview.displayName = 'Pattern';
PatternPreview.defaultProps = {
};

export default PatternPreview;
