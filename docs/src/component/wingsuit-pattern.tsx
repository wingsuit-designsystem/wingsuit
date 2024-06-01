import { Property, renderer } from '@wingsuit-designsystem/pattern';
import WingsuitLink from '@/component/wingsuit-link';
import WingsuitTabView from '@/component/wingsuit-tab-view';
import WingsuitTabPanel from '@/component/wingsuit-tab-panel';
import parse, { domToReact, HTMLReactParserOptions, Element, DOMNode } from 'html-react-parser';
import Pattern from '@wingsuit-designsystem/pattern/dist/Pattern';
import { TabView, TabPanel } from 'primereact/tabview';
import React from 'react';

interface Components {
  [key: string]: React.ComponentClass;
}

const components: Components = {
  tab: TabView,
  tabs: TabView,
  'tab-list': TabPanel,
};
export default async function WingsuitPattern({
  children,
  patternId,
  variantId,
  variables,
}: {
  children?: React.ReactNode;
  patternId: string;
  variantId: string;
  variables?: any;
}) {
  const markup = await renderer.renderPatternPreview(patternId, variables, variantId);
  const options: HTMLReactParserOptions = {
    transform(reactNode, domNode, index) {
      // this will wrap every element in a div
      const domName: string = domNode.name;
      if (
        reactNode &&
        domNode instanceof Element &&
        domNode.type === 'tag' &&
        domName === 'tab-view'
      ) {
        return <WingsuitTabView key="test">{domNode}</WingsuitTabView>;
      }
      if (
        reactNode &&
        domNode instanceof Element &&
        domNode.type === 'tag' &&
        domName === 'tab-panel'
      ) {
        return <TabPanel header="Header" key={domNode.attribs.header}>{reactNode}</TabPanel>;
      }
      return reactNode;
    },
    replace: (domNode: any) => {
      const domName: string = domNode.name;
      if (domNode instanceof Element && domNode.type === 'tag' && domNode.name === 'maincontent') {
        return children;
      }
      if (domNode instanceof Element && domNode.type === 'tag' && domNode.name === 'a') {
        return (
          <WingsuitLink href={domNode.attribs.href} wingsuitClassName={domNode.attribs.class}>
            {domToReact(domNode.children as DOMNode[])}
          </WingsuitLink>
        );
      }
    },
  };
  return <>{parse(markup, options)}</>;
}

WingsuitPattern.defaultProps = {
  variantId: Pattern.DEFAULT_VARIANT_NAME,
};
