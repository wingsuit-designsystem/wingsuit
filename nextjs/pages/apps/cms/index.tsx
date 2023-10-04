import type { Metadata } from 'next';
import DocsLayout from '@/components/docs-layout';
import type { NextPageWithLayout } from '../../_app';
import Mdx from './index.mdx';

export { getStaticProps } from '@/lib/docs-static-props';

const metadata: Metadata = {
  title: 'Wingsuit introduction',
  description: 'Wingsuit is a toolset to build CMS independent TWIG components.',
};

const Page: NextPageWithLayout = () => {
  return <Mdx />;
};

Page.getLayout = DocsLayout;
Page.metadata = metadata;

export default Page;
