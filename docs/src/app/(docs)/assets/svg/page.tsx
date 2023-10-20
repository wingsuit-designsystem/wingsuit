// eslint-disable-next-line import/no-unresolved
import { NextLink } from '@/app/(docs)/layout';
// eslint-disable-next-line import/no-unresolved
import WingsuitPattern from '@/component/wingsuit-pattern';
import Mdx from './index.mdx';
// eslint-disable-next-line import/no-unresolved
import 'organisms/next-links';

const next: NextLink = [
  {
    title: 'Images & Icons',
    text: 'Learn how to use images and icons in your patterns.',
    link_title: 'continue',
    href: '/assets/images',
  },
  {
    title: 'Javascript',
    text: 'Learn how to use javascript in your patterns.',
    link_title: 'continue',
    href: '/assets/javascript',
  },
];

export const metadata = {
  title: 'SVGs',
  description: 'Render SVGs as icons or images.',
};
export default function Page() {
  return (
    <>
      <Mdx />
      <WingsuitPattern patternId="next_links" variables={{ items: next }} />
    </>
  );
}
