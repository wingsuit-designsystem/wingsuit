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
    title: 'SVG',
    text: 'Learn how to use svg assets in your patterns.',
    link_title: 'continue',
    href: '/assets/svg',
  },
  {
    title: 'Javascript',
    text: 'Learn how to use javascript in your patterns.',
    link_title: 'continue',
    href: '/assets/javascript',
  },
];

export const metadata = {
  title: 'Assets overview',
  description: 'Wingsuit will compile all assets, which are @import ed inside the design system.',
};
export default function Page() {
  return (
    <>
      <Mdx />
      <WingsuitPattern patternId="next_links" variables={{ items: next }} />
    </>
  );
}
