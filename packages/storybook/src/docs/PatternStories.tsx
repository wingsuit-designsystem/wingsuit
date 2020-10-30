import React, { FunctionComponent } from 'react';

import { Heading, Preview } from '@storybook/addon-docs/blocks';
import { Pattern } from '@wingsuit-designsystem/pattern';

import { PatternInclude } from './PatternInclude';
import { PatternProperties } from './PatternProperties';
import PatternPreview from '../components/PatternPreview';

interface StoriesProps {
  includePrimary?: boolean;
  showInclude?: boolean;
  pattern: Pattern;
}

export const PatternStories: FunctionComponent<StoriesProps> = (props: StoriesProps) => {
  const { pattern, includePrimary } = props;

  if (pattern == null) {
    return null;
  }
  let variants = Object.values(pattern.getPatternVariants());
  if (!includePrimary) {
    variants = variants.slice(1);
  }
  if (variants.length === 0) {
    return null;
  }

  return (
    <>
      {variants.map((variant) => {
        const included = props.showInclude ?? <PatternInclude variant={variant} />;
        return (
          <>
            <Heading>{variant.getLabel()}</Heading>
            <Preview>
              <PatternPreview patternId={pattern.getId()} variantId={variant.getId()} />
            </Preview>
            <>{included}</>
            <PatternProperties variant={variant} />
          </>
        );
      })}
    </>
  );
};

PatternStories.defaultProps = {
  includePrimary: false,
  showInclude: true,
};
