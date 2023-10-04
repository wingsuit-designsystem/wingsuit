import type { Metadata } from 'next';
import DocsLayout from '@/components/docs-layout';
import Mdx from './index.mdx';

export { getStaticProps } from '@/lib/docs-static-props';

const metadata: Metadata = {
  title: 'Automated command line tool',
  description: 'This command creates a Wingsuit demo project.',
};

export default function Page() {
  return <Mdx />;
}

Page.getLayout = DocsLayout;
Page.metadata = metadata;
Page.next = [
  {
    title: 'Create a new component',
    text: 'Learn how to use wingsuit by building a new component.',
    link_title: 'continue',
    href: '/guides/create-component-guide',
  },
];
