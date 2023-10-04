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
Page.next = [
  {
    title: 'UI Patterns',
    text: 'Learn how wingsuit leverages UI patterns.',
    link_title: 'continue',
    href: '/components/wingsuit',
  },
  {
    title: 'Presentation templates',
    text: 'Learn how to create storybook preview pages for your components.',
    link_title: 'continue',
    href: '/components/presentation',
  },
];
