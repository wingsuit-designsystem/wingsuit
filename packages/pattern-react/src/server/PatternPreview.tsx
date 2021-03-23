import React, { FunctionComponent } from 'react';

type Props = { patternId?; variantId?; variant? };

const PatternPreview: FunctionComponent<Props> = ({
  patternId,
  variantId,
  variant,
  ...variables
}) => {
  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: '' }} />;
};

PatternPreview.displayName = 'PatternPreview';

PatternPreview.defaultProps = {
  patternId: '',
  variantId: '',
  variant: null,
};

export default PatternPreview;
