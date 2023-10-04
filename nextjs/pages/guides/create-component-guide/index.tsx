import type { Metadata } from 'next';
import DocsLayout from '@/components/docs-layout';
import Mdx from './index.mdx';

export { getStaticProps } from '@/lib/docs-static-props';

const metadata: Metadata = {
  title: 'Create new component',
  description:
    'The wizard will guide you through all possible pattern types, including documentation.',
};

export default function Page() {
  return <Mdx />;
}

Page.getLayout = DocsLayout;
Page.metadata = metadata;
Page.next = [
  {
    title: 'Not sure which component type you need?',
    text: 'Check the docs!',
    link_title: 'Component types',
    href: '/components/overview',
  },
];
