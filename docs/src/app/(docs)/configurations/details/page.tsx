// eslint-disable-next-line import/no-unresolved
import { NextLink } from '@/app/(docs)/layout';
// eslint-disable-next-line import/no-unresolved
import WingsuitPattern from '@/component/wingsuit-pattern';
import Mdx from './index.mdx';
// eslint-disable-next-line import/no-unresolved
import 'organisms/next-links';

const next: NextLink = [
  {
    title: 'Configure webpack',
    text: 'Learn how to add custom webpack configuration, or alter the existing one.',
    link_title: 'continue',
    href: '/configurations/custom-webpack-config',
  },
  {
    title: 'Presets',
    text: 'Learn about presets and how to use them.',
    link_title: 'continue',
    href: '/configurations/preset-webpack',
  },
];

export const metadata = {
  title: 'Overview',
  description: 'Wingsui configuration.',
};
export default function Page() {
  return (
    <>
      <Mdx />
      <WingsuitPattern patternId="next_links" variables={{ items: next }} />
    </>
  );
}
