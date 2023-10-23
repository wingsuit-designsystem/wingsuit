// eslint-disable-next-line import/no-unresolved
import { NextLink } from '@/app/(docs)/layout';
// eslint-disable-next-line import/no-unresolved
import WingsuitPattern from '@/component/wingsuit-pattern';
import Mdx from './index.mdx';
// eslint-disable-next-line import/no-unresolved
import 'organisms/next-links';

const next: NextLink = [
  {
    title: 'Not sure which component type you need?',
    text: 'Check the docs!',
    link_title: 'Component types',
    href: '/components/overview',
  },
];

export const metadata = {
  title: 'Create new component',
  description:
    'The wizard will guide you through all possible pattern types, including documentation.',
};
export default function Page() {
  return (
    <>
      <Mdx />
      <WingsuitPattern patternId="next_links" variables={{ items: next }} />
    </>
  );
}
