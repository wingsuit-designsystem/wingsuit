import React, { FunctionComponent } from 'react';

import { Heading, Preview } from '@storybook/addon-docs';
import { Pattern } from '@wingsuit-designsystem/pattern';

import { PatternPreview } from '@wingsuit-designsystem/pattern-react/client';
import { PatternInclude } from './PatternInclude';
import { PatternProperties } from './PatternProperties';

interface StoriesProps {
  includePrimary?: boolean;
  showInclude?: boolean;
  pattern: Pattern;
}

export const PatternDoc: FunctionComponent<StoriesProps> = (props: StoriesProps) => {
  const { pattern, includePrimary, showInclude } = props;

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
        const included = showInclude === true ? <PatternInclude variant={variant} /> : null;
        return (
          <div key={variant.getId()} id={`anchor--${variant.getStoryId()}`}>
            <Heading>{variant.getLabel()}</Heading>
            <Preview>
              <PatternPreview patternId={pattern.getId()} variantId={variant.getId()} />
            </Preview>
            <>{included}</>
            <PatternProperties variant={variant} />
          </div>
        );
      })}
    </>
  );
};

PatternDoc.defaultProps = {
  includePrimary: false,
  showInclude: true,
};
