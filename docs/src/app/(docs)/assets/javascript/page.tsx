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
];

export const metadata = {
  title: 'Javascript',
  description: 'Drupal javascript behaviors are working out of the box in Wingsuit.',
};
export default function Page() {
  return (
    <>
      <Mdx />
      <WingsuitPattern patternId="next_links" variables={{ items: next }} />
    </>
  );
}
