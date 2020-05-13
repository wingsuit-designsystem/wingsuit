import React, { FunctionComponent } from 'react';
import {renderer} from '@wingsuit-designsystem/pattern';

type Props =  {data};

function renderTwig(data, variables) {
  return renderer.renderData(Math.random().toString(), data, variables);
}

const RenderTwig: FunctionComponent<Props> = ({ data, ...variables }) => (
  <div dangerouslySetInnerHTML={{ __html: renderTwig(data, variables) }} />
);

RenderTwig.displayName = 'RenderTwig';

export default RenderTwig;
