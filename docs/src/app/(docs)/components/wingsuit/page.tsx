// eslint-disable-next-line import/no-unresolved
import { NextLink } from '@/app/(docs)/layout';
// eslint-disable-next-line import/no-unresolved
import WingsuitPattern from '@/component/wingsuit-pattern';
import Mdx from './index.mdx';
// eslint-disable-next-line import/no-unresolved
import 'organisms/next-links';

const next: NextLink = [
  {
    title: 'Presentation templates',
    text: 'Learn how to create storybook preview pages for your components.',
    link_title: 'continue',
    href: '/components/presentation',
  },
  {
    title: 'Assets',
    text: 'Learn how to manage your css, js and other asses with wingsuit.',
    link_title: 'continue',
    href: '/assets/overview',
  },
];

export const metadata = {
  title: 'Wingsuit Pattern 222',
  description: 'The Wingsuit component definition.',
};
export default function Page() {
  return (
    <>
      <Mdx />
      <WingsuitPattern patternId="next_links" variables={{ items: next }} />
    </>
  );
}
