// eslint-disable-next-line import/no-unresolved
import { NextLink } from '@/app/(docs)/layout';
// eslint-disable-next-line import/no-unresolved
import WingsuitPattern from '@/component/wingsuit-pattern';
import Mdx from './index.mdx';
// eslint-disable-next-line import/no-unresolved
import 'organisms/next-links';

const next: NextLink = [
  {
    title: 'Compression Preset',
    text: 'Gzip and Brotli compression for your files.',
    link_title: 'continue',
    href: '/presets/compression',
  },
  {
    title: 'Imagemin Preset',
    text: 'Optimize your images and create webp variants of them on the fly.',
    link_title: 'continue',
    href: '/presets/imagemin',
  },
  {
    title: 'PWA Preset',
    text: 'Let wingsuit generate all your favicons and a manifest.json for pwa enhancements for you.',
    link_title: 'continue',
    href: '/presets/pwa',
  },
];

export const metadata = {
  title: 'Presets',
  description:
    'Wingsuit uses presets to make webpack configurations reusable across different apps.',
};
export default function Page() {
  return (
    <>
      <Mdx />
      <WingsuitPattern patternId="next_links" variables={{ items: next }} />
    </>
  );
}
