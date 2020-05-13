import React, { FunctionComponent } from 'react';
import {renderer} from '@wingsuit-designsystem/pattern';
import PropTypes from 'prop-types';

type Props =  {patternId, variantId};

const PatternPreview: FunctionComponent<Props> = ({ patternId, variantId, ...variables }) => (
  <div dangerouslySetInnerHTML={{ __html: renderer.renderPatternPreview(patternId, variantId, variables) }} />
);

PatternPreview.displayName = 'PatternPreview';

PatternPreview.propTypes = {
  patternId: PropTypes.string,
  variantId: PropTypes.string
};
export default PatternPreview;
