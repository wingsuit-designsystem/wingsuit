// eslint-disable-next-line import/no-unresolved
import { NextLink } from '@/app/(docs)/layout';
// eslint-disable-next-line import/no-unresolved
import WingsuitPattern from '@/component/wingsuit-pattern';
import Mdx from './index.mdx';
// eslint-disable-next-line import/no-unresolved
import 'organisms/next-links';

const next: NextLink = [
  {
    title: 'Extend Wingsuit component documentation',
    link_title: 'Continue',
    href: '/documentation/mdx',
  },
  {
    title: 'Storybook MDX documentation',
    link_title: 'Continue',
    href: 'https://storybook.js.org/docs/react/api/mdx',
  },
];

export const metadata = {
  title: 'Build Twig Components in Storybook',
  description:
    'A modern way of building, maintaining and documenting your visual driven twig components in storybook.',
};
export default function Page() {
  return (
    <>
      <Mdx />
      <WingsuitPattern patternId="next_links" variables={{ items: next }} />
    </>
  );
}
