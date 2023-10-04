import type { Metadata } from 'next';
import DocsLayout from '@/components/docs-layout';
import Mdx from './index.mdx';

export { getStaticProps } from '@/lib/docs-static-props';

const metadata: Metadata = {
  title: 'Wingsuit introduction',
  description: 'Wingsuit is a toolset to build CMS independent TWIG components.',
};

export default function Page() {
  return <Mdx />;
}

Page.getLayout = DocsLayout;
Page.metadata = metadata;
