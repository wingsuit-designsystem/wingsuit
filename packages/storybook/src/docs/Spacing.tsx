import React, { FunctionComponent } from 'react';
import { ScrollArea } from '@storybook/components';

interface SpacingProps {
  spacing: {};
  color?;
  direction?;
  classNamePrefix?;
}

export const Spacing: FunctionComponent<SpacingProps> = (props: SpacingProps) => {
  const { direction, spacing, classNamePrefix, color } = props;
  return direction === 'horizontal' ? (
    <ScrollArea>
      {Object.keys(spacing).map((key, i) => {
        return (
          <div style={{ display: 'flex', paddingBottom: '6px' }}>
            <div style={{ width: '60px', fontSize: '10px', flexShrink: 0 }}>
              {classNamePrefix != null ? (
                <div style={{ paddingTop: '4px' }}>{classNamePrefix + key}</div>
              ) : (
                <div style={{ paddingTop: '4px' }}>{spacing[key]}</div>
              )}
            </div>
            <div style={{ width: '100%' }}>
              <div
                className={classNamePrefix + key}
                style={{
                  height: '1.4rem',
                  backgroundColor: color,
                  width: spacing[key],
                  borderRadius: '0.375rem',
                }}
              >
                {classNamePrefix != null ? (
                  <div style={{ fontSize: '10px', paddingTop: '4px', marginLeft: '8px' }}>
                    {spacing[key]}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </ScrollArea>
  ) : (
    <ScrollArea>
      <div style={{ display: 'flex' }}>
        {Object.keys(spacing).map((key, i) => {
          return (
            <div style={{ paddingBottom: '6px' }}>
              <div
                style={{
                  width: '38px',
                  fontSize: '11px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {classNamePrefix != null ? (
                  <div>{classNamePrefix + key}</div>
                ) : (
                  <div>{spacing[key]}</div>
                )}
              </div>
              <div style={{ height: '100%' }}>
                <div
                  className={classNamePrefix + key}
                  style={{
                    backgroundColor: color,
                    width: '1.4rem',
                    height: spacing[key],
                    borderRadius: '0.375rem',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
};

Spacing.defaultProps = {
  classNamePrefix: null,
  color: '#81E6D9',
  direction: 'horizontal',
};

export default Spacing;
