import React, { FunctionComponent, useEffect, useState } from 'react';
import { getStorage } from '@wingsuit-designsystem/pattern';
import { attachBehaviors, init } from '../behaviors';

type Props = { patternId?; variantId?; variant?; environment? };

const PatternPreview: FunctionComponent<Props> = ({
  patternId,
  variantId,
  environment,
  variant,
  ...variables
}) => {
  const [rendered, setRendered] = useState('');
  const finalVariant = variant ?? getStorage().loadVariant(patternId, variantId);
  init('Drupal');
  useEffect(() => {
    let mounted = true;

    const template = finalVariant.getPattern().getTemplate();

    template()
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
    attachBehaviors(global.window.document, {});
  }, [rendered]);
  return <div dangerouslySetInnerHTML={{ __html: rendered }} />;
};

PatternPreview.displayName = 'PatternPreview';

PatternPreview.defaultProps = {
  patternId: '',
  variantId: '',
  variant: null,
  environment: null,
};

export default PatternPreview;
