import type { Metadata } from 'next';
import DocsLayout from '@/components/docs-layout';
import Mdx from './index.mdx';

export { getStaticProps } from '@/lib/docs-static-props';

const metadata: Metadata = {
  title: 'Apps overview',
  description: 'Integrate your Design System into your application or CMS.',
};

export default function Page() {
  return <Mdx />;
}

Page.getLayout = DocsLayout;
Page.metadata = metadata;
