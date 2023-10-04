import type { Metadata } from 'next';
import DocsLayout from '@/components/docs-layout';
import Mdx from './index.mdx';

export { getStaticProps } from '@/lib/docs-static-props';

const metadata: Metadata = {
  title: 'Custom Webpack configuration',
  description: 'Custom webpack configuration.',
};

export default function Page() {
  return <Mdx />;
}

Page.getLayout = DocsLayout;
Page.metadata = metadata;
Page.next = [
  {
    title: 'Presets',
    text: 'Learn about presets and how to use them.',
    link_title: 'continue',
    href: '/presets/overview',
  },
  {
    title: 'Components',
    text: 'Learn about creating and editing components.',
    link_title: 'continue',
    href: '/components/overview',
  },
];
