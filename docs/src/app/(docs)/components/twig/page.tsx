// eslint-disable-next-line import/no-unresolved
import { NextLink } from '@/app/(docs)/layout';
// eslint-disable-next-line import/no-unresolved
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
    title: 'Assets',
    text: 'Learn how to manage your css, js and other asses with wingsuit.',
    link_title: 'continue',
    href: '/assets/overview',
  },
];

export const metadata = {
  title: 'Twig only',
  description: 'Twig only component works without any wingsuit YAML file',
};
export default function Page() {
  return (
    <>
      <Mdx />
      <WingsuitPattern patternId="next_links" variables={{ items: next }} />
    </>
  );
}
