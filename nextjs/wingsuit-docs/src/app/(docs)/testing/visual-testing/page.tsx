// eslint-disable-next-line import/no-unresolved
import { NextLink } from '@/app/(docs)/layout';
// eslint-disable-next-line import/no-unresolved
import WingsuitPattern from '@/component/wingsuit-pattern';
import Mdx from './index.mdx';
// eslint-disable-next-line import/no-unresolved
import 'organisms/next-links';

const next: NextLink = [
  {
    title: 'Storybook visual testing documentation',
    link_title: 'Continue',
    href: 'https://storybook.js.org/docs/react/workflows/visual-testing#gatsby-focus-wrapper',
  },
  {
    title: 'Chromatic, great visual testing service made by Storybook',
    link_title: 'Great!',
    href: 'http://chromatic.com/',
  },
  {
    title: 'Storybook addon storyshots',
    link_title: 'Continue',
    href: 'https://github.com/storybookjs/storybook/tree/master/addons/storyshots',
  },
];

export const metadata = {
  title: 'Visual testing',
  description: 'Make Wingsuit work with visual testing.',
};
export default function Page() {
  return (
    <>
      <Mdx />
      <WingsuitPattern patternId="next_links" variables={{ items: next }} />
    </>
  );
}
