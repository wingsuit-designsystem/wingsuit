import type { Metadata } from 'next';
import DocsLayout from '@/components/docs-layout';
import Mdx from './index.mdx';

export { getStaticProps } from '@/lib/docs-static-props';

const metadata: Metadata = {
  title: 'Overview',
  description: 'The wizard will guide you through app generation.',
};

export default function Page() {
  return <Mdx />;
}

Page.getLayout = DocsLayout;
Page.metadata = metadata;
Page.next = [
  {
    title: 'Configure webpack',
    text: 'Learn how to add custom webpack configuration, or alter the existing one.',
    link_title: 'continue',
    href: '/configurations/custom-webpack-config',
  },
  {
    title: 'Presets',
    text: 'Learn about presets and how to use them.',
    link_title: 'continue',
    href: '/configurations/preset-webpack',
  },
];
