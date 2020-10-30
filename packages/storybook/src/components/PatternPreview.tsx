import React, { FunctionComponent, useEffect, useState } from 'react';
import { renderer } from '@wingsuit-designsystem/pattern';
import PropTypes from 'prop-types';

type Props = { patternId; variantId };

const PatternPreview: FunctionComponent<Props> = ({ patternId, variantId, ...variables }) => {
  const [rendered, setRendered] = useState('');
  useEffect(() => {
    renderer
      .renderPatternPreview(patternId, variantId, variables)
      .then((output: string) => {
        setRendered(output);
      })
      .catch((error) => {
        setRendered(`Error: ${error.message}`);
      });
    return () => {
      setRendered('');
    }
  }, [patternId, variantId, JSON.stringify(variables)]);

  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: rendered }} />;
};

PatternPreview.displayName = 'PatternPreview';

PatternPreview.propTypes = {
  patternId: PropTypes.string.isRequired,
  variantId: PropTypes.string.isRequired,
};
export default PatternPreview;
