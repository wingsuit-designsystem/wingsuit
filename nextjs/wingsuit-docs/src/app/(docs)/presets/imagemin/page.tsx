// eslint-disable-next-line import/no-unresolved
import { NextLink } from '@/app/(docs)/layout';
// eslint-disable-next-line import/no-unresolved
import WingsuitPattern from '@/component/wingsuit-pattern';
import Mdx from './index.mdx';
// eslint-disable-next-line import/no-unresolved
import 'organisms/next-links';

const next: NextLink = [
  {
    title: 'PWA Preset',
    text: 'Let wingsuit generate all your favicons and a manifest.json for pwa enhancements for you.',
    link_title: 'continue',
    href: '/presets/pwa',
  },
  {
    title: 'Components',
    text: 'Learn about creating and editing components.',
    link_title: 'continue',
    href: '/components/overview',
  },
];

export const metadata = {
  title: 'Imagemin Preset',
  description: 'The official wingsuit imagemin preset optimizes your images.',
};
export default function Page() {
  return (
    <>
      <Mdx />
      <WingsuitPattern patternId="next_links" variables={{ items: next }} />
    </>
  );
}
