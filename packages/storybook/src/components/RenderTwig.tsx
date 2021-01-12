import React, { FunctionComponent, useEffect, useState } from 'react';
import { renderer } from '@wingsuit-designsystem/pattern';
import { attachBehaviors } from '../behaviors';

type Props = { data };

const RenderTwig: FunctionComponent<Props> = ({ data, ...variables }) => {
  const [rendered, setRendered] = useState('');
  useEffect(() => {
    const mounted = true;
    renderer
      .renderData(Math.random().toString(), data.default, variables)
      .then((output: string) => {
        if (mounted) {
          setRendered(output);
        }
      })
      .catch(error => {
        setRendered(error.message);
      });
  }, [data, JSON.stringify(variables)]);
  useEffect(() => {
    if (!rendered) return;
    attachBehaviors(global.window.document, {});
  }, [rendered]);
  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: rendered }} />;
};

RenderTwig.displayName = 'RenderTwig';

export default RenderTwig;
