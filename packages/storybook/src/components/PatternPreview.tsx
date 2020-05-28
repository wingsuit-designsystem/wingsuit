import React, {FunctionComponent, useEffect, useState} from 'react';
import {renderer} from '@wingsuit-designsystem/pattern';
import PropTypes from 'prop-types';

type Props = { patternId, variantId };

const PatternPreview: FunctionComponent<Props> = ({patternId, variantId, ...variables}) => {
  const [rendered, setRendered] = useState("");

  console.log('PATTERN PREVIEW')
  useEffect(() => {
    console.log('RENDER')
    renderer.renderPatternPreview(patternId, variantId, variables).then((output: string) => {
      setRendered(output);
    }).catch((error) => {
      setRendered("Error");
    });
  }, [patternId, variantId, JSON.stringify(variables)])
  return <div dangerouslySetInnerHTML={{__html: rendered}}/>
};

PatternPreview.displayName = 'PatternPreview';

PatternPreview.propTypes = {
  patternId: PropTypes.string,
  variantId: PropTypes.string
};
export default PatternPreview;
