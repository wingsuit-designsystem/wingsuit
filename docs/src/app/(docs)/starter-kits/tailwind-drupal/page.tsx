// eslint-disable-next-line import/no-unresolved
import { NextLink } from '@/app/(docs)/layout';
// eslint-disable-next-line import/no-unresolved
import WingsuitPattern from '@/component/wingsuit-pattern';
import Mdx from './index.mdx';
// eslint-disable-next-line import/no-unresolved
import 'organisms/next-links';

const next: NextLink = [
  {
    title: 'Did we catch your interest?',
    text: 'Do the 10 minute quickstart guide!',
    href: '/guides/quick-start-guide',
    link_title: 'Quickstart',
  },
];

export const metadata = {
  title: 'Drupal loves TailwindCSS',
  description: 'Wingsuit starter kit for TailwindCSS.',
};
export default function Page() {
  return (
    <>
      <Mdx />
      <WingsuitPattern patternId="next_links" variables={{ items: next }} />
    </>
  );
}
