import React, {FunctionComponent, useEffect, useState} from 'react';
import {storage, Pattern} from '@wingsuit-designsystem/pattern';

type Props = { patternId: string, children: any };

const PatternLoad: FunctionComponent<Props> = (props: Props) => {

  const [pattern, setPattern] = useState(null);
  const {children} = props;
  useEffect(() => {
    const loaded: Pattern = storage.loadPattern(props.patternId);
    // @ts-ignore
    setPattern(loaded);
  }, []);
  return (
    <>
      {children(pattern)}
    </>
  );
};
export default PatternLoad;