import { NextLink } from '@/app/(docs)/layout';
import WingsuitPattern from '@/component/wingsuit-pattern';
import Mdx from './index.mdx';
// eslint-disable-next-line import/no-unresolved
import 'organisms/next-links';

const next: NextLink = [
  {
    title: 'UI Patterns',
    text: 'Learn how wingsuit leverages UI patterns.',
    link_title: 'continue',
    href: '/components/wingsuit',
  },
  {
    title: 'Components',
    text: 'Learn about creating and editing components.',
    link_title: 'continue',
    href: '/components/overview',
  },
];

export default function Page() {
  return (
    <>
      <Mdx />
      <WingsuitPattern patternId="next_links" variables={{ items: next }} />
    </>
  );
}
