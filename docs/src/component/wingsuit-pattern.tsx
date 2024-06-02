import { renderer } from '@wingsuit-designsystem/pattern';
import parse, { domToReact, Element, DOMNode } from 'html-react-parser';
import React from 'react';
import WingsuitLink from '@/component/wingsuit-link';
import WingsuitTabView from '@/component/wingsuit-tab-view';
import WingsuitCode from '@/component/wingsuit-code';

export default async function WingsuitPattern({
  children,
  patternId,
  variantId,
  variables,
}: {
  children?: React.ReactNode;
  patternId: string;
  variantId?: string;
  variables?: any;
}) {
  const markup = await renderer.renderPatternPreview(patternId, variables, variantId);
  const options: {
    replace: (
      domNode: any
    ) =>
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | string
      | number
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | boolean
      | undefined
      | null;
  } = {
    replace: (domNode: any) => {
      const domName: string = domNode.name;
      if (domNode instanceof Element && domNode.type === 'tag' && domNode.name === 'maincontent') {
        return children;
      }
      if (domNode instanceof Element && domNode.type === 'tag' && domName === 'tab-view') {
        return (
          <WingsuitTabView variant={domNode.attribs.variant} color={domNode.attribs.color}>
            {domToReact(domNode.children as DOMNode[], options)}
          </WingsuitTabView>
        );
      }
      if (domNode instanceof Element && domNode.type === 'tag' && domName === 'snippet') {
        return <WingsuitCode code={domNode.attribs.code} />;
      }
      if (domNode instanceof Element && domNode.type === 'tag' && domNode.name === 'a') {
        return (
          <WingsuitLink href={domNode.attribs.href} wingsuitClassName={domNode.attribs.class}>
            {domToReact(domNode.children as DOMNode[])}
          </WingsuitLink>
        );
      }
      return null;
    },
  };
  return <>{parse(markup, options)}</>;
}
