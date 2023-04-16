import React, { FunctionComponent } from 'react';
import { styled } from '@storybook/theming';
import { transparentize } from 'polished';

const Label = styled.div<object>(({ theme }) => ({
  marginRight: 30,
  fontSize: `${theme.typography.size.s1}px`,
  color:
    theme.base === 'light'
      ? transparentize(0.4, theme.color.defaultText)
      : transparentize(0.6, theme.color.defaultText),
}));

const Sample = styled.div({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

const TypeSpecimen = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'baseline',
  '&:not(:last-child)': { marginBottom: '1rem' },
});

const Wrapper = styled.div<any>({}, ({ theme }) => ({
  border: '1px solid rgba(0, 0, 0, 0.1)',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px',
  margin: '25px 0 40px',
  padding: '30px 20px',
}));

export interface TypesetProps {
  fontFamily: string;
  classNamePrefix: string;
  fontSizes: any;
  fontWeight?: number;
  sampleText?: string;
}

/**
 * Convenient styleguide documentation showing examples of type
 * with different sizes and weights and configurable sample text.
 */
export const Typeset: FunctionComponent<TypesetProps> = ({
  fontFamily,
  fontSizes,
  fontWeight,
  sampleText,
  classNamePrefix,
  ...props
}) => (
  <Wrapper {...props} className="docblock-typeset">
    {Object.keys(fontSizes).map((name) => (
      <TypeSpecimen key={fontSizes[name]} style={{ alignItems: 'center' }}>
        <Label style={{ flexShrink: 0, width: '40px' }}>
          {classNamePrefix}
          {name}
          <br />
          {fontSizes[name]}
        </Label>
        <Sample
          style={{
            fontFamily,
            fontSize: fontSizes[name],
            fontWeight,
            lineHeight: fontSizes[name],
          }}
        >
          {sampleText}
        </Sample>
      </TypeSpecimen>
    ))}
  </Wrapper>
);
Typeset.defaultProps = {
  sampleText: 'Was he a beast if music could move him so?',
  fontWeight: 4,
};
export default Typeset;
