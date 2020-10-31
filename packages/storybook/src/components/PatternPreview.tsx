import React, { FunctionComponent, useEffect, useState } from 'react';
import { renderer } from '@wingsuit-designsystem/pattern';

type Props = { patternId?; variantId?; variant? };

const PatternPreview: FunctionComponent<Props> = ({
  patternId,
  variantId,
  variant,
  ...variables
}) => {
  const [rendered, setRendered] = useState('');
  const finalPatternId = variant !== null ? variant.getPattern().getId() : patternId;
  const finalVariantId = variant !== null ? variant.getId() : variantId;
  useEffect(() => {
    let mounted = true;
    renderer
      .renderPatternPreview(finalPatternId, finalVariantId, variables)
      .then((output: string) => {
        if (mounted) {
          setRendered(output);
        }
      })
      .catch((error) => {
        setRendered(`Error: ${error.message}`);
      });
    return () => {
      setRendered('');
      mounted = false;
    };
  }, [patternId, variantId, JSON.stringify(variables)]);

  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: rendered }} />;
};

PatternPreview.displayName = 'PatternPreview';

PatternPreview.defaultProps = {
  patternId: '',
  variantId: '',
  variant: null,
};

export default PatternPreview;
