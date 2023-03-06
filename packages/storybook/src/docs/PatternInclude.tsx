import twig from 'react-syntax-highlighter/dist/cjs/languages/prism/markup';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Source } from '@storybook/addon-docs';
import React, { FunctionComponent, useState } from 'react';
import { PatternVariant } from '@wingsuit-designsystem/pattern';

SyntaxHighlighter.registerLanguage('twig', twig);

type Props = { variant: PatternVariant };

interface Variables {
  variant?: string;
}

export const PatternInclude: FunctionComponent<Props> = (props: Props) => {
  const [code, setCode] = useState('');
  const { variant } = props;
  variant.beforeRender((renderArgs) => {
    const variables: Variables = {};
    const settings = variant.getSettings();
    if (variant.getId() !== '__default') {
      variables.variant = variant.getId();
    } else {
      delete variables.variant;
    }
    Object.keys(settings).forEach((key) => {
      const setting = settings[key];
      if (
        setting.getType() !== 'media_library' &&
        renderArgs[key] &&
        setting.getDefaultValue() !== renderArgs[key] &&
        setting.isEnable()
      ) {
        variables[key] = renderArgs[key];
      }
    });
    const generatedCode = `{% include "${variant.getUse()}" with ${JSON.stringify(
      variables,
      null,
      2
    )} %}`;
    // @ts-ignore
    setCode(generatedCode);
  });

  if (code !== '') {
    return (
      <>
        <Source language="twig" code={code} />
      </>
    );
  }
  return <>Loading</>;
};
