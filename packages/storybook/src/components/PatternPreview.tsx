import React, { FunctionComponent, useEffect, useState } from 'react';
import { renderer } from '@wingsuit-designsystem/pattern';
import { attachBehaviors } from '../behaviors';

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

  useEffect(() => {
    if (!rendered) return;
    attachBehaviors(global.window.document, {})
  }, [rendered])

  // eslint-disable-next-line react/no-danger
  const element = <div dangerouslySetInnerHTML={{__html: rendered}}/>;
  return element;
};

PatternPreview.displayName = 'PatternPreview';

PatternPreview.defaultProps = {
  patternId: '',
  variantId: '',
  variant: null,
};

export default PatternPreview;
