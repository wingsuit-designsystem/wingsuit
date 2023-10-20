import { Property, renderer } from '@wingsuit-designsystem/pattern';
import WingsuitLink from '@/component/wingsuit-link';
import parse, { domToReact, HTMLReactParserOptions, Element } from 'html-react-parser';
import Pattern from '@wingsuit-designsystem/pattern/dist/Pattern';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React from 'react';

interface Components {
  [key: string]: React.ComponentClass;
}

const components: Components = {
  tab: Tab,
  tabs: Tabs,
  'tab-list': TabList,
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
    replace: (domNode: any) => {
      const domName: string = domNode.name;
      if (domNode instanceof Element && domNode.type === 'tag' && domNode.name === 'maincontent') {
        return children;
      }
      if (domNode instanceof Element && domNode.type === 'tag' && domNode.name === 'a') {
        return (
          <WingsuitLink href={domNode.attribs.href} wingsuitClassName={domNode.attribs.class}>
            {domToReact(domNode.children)}
          </WingsuitLink>
        );
      }
      if (domNode instanceof Element && domNode.type === 'tag' && domName === 'tab-panel') {
        return (
          <TabPanel>
            <div>DEMO</div>
          </TabPanel>
        );
      }
      if (domNode instanceof Element && domNode.type === 'tag' && components[domName]) {
        return React.createElement(components[domName], {}, domToReact(domNode.children, options));
      }
      return domNode;
    },
  };
  return <>{parse(markup, options)}</>;
}

WingsuitPattern.defaultProps = {
  variantId: Pattern.DEFAULT_VARIANT_NAME,
};
