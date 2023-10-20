// eslint-disable-next-line import/no-unresolved
import { NextLink } from '@/app/(docs)/layout';
// eslint-disable-next-line import/no-unresolved
import WingsuitPattern from '@/component/wingsuit-pattern';
import Mdx from './index.mdx';
// eslint-disable-next-line import/no-unresolved
import 'organisms/next-links';

const next: NextLink = [
  {
    title: 'Presets',
    text: 'Learn about presets and how to use them.',
    link_title: 'continue',
    href: '/presets/overview',
  },
  {
    title: 'Components',
    text: 'Learn about creating and editing components.',
    link_title: 'continue',
    href: '/components/overview',
  },
];

export const metadata = {
  title: 'Configuration2',
  description: 'Custom webpack configuration.',
};
export default function Page() {
  return (
    <>
      <Mdx />
      <WingsuitPattern patternId="next_links" variables={{ items: next }} />
    </>
  );
}
