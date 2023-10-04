import type { Metadata } from 'next';
import DocsLayout from '@/components/docs-layout';
import Mdx from './index.mdx';

export { getStaticProps } from '@/lib/docs-static-props';

const metadata: Metadata = {
  title: 'Create new app',
  description: 'The wizard will guide you through app generation.',
};

export default function Page() {
  return <Mdx />;
}

Page.getLayout = DocsLayout;
Page.metadata = metadata;
Page.next = [
  {
    title: 'Configure your app?',
    text: 'Check the parameters under the "App details" section and extend your wingsuit.config.js',
    link_title: 'Details',
    href: '/configurations/details',
  },
];
