import React, { FunctionComponent, useEffect, useState } from 'react';
import { storage, Pattern } from '@wingsuit-designsystem/pattern';

type Props = { patternId: string; children: any };

const PatternLoad: FunctionComponent<Props> = (props: Props) => {
  const [pattern, setPattern] = useState(null);
  const { children } = props;
  useEffect(() => {
    const { patternId } = props;
    const loaded: Pattern = storage.loadPattern(patternId);
    setPattern(loaded);
  }, [props]);
  if (pattern != null) {
    return <>{children(pattern)}</>;
  }
  return <>Loading</>;
};
export default PatternLoad;
