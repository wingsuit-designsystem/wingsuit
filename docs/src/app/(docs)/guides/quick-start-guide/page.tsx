// eslint-disable-next-line import/no-unresolved
import { NextLink } from '@/app/(docs)/layout';
// eslint-disable-next-line import/no-unresolved
import WingsuitPattern from '@/component/wingsuit-pattern';
import Mdx from './index.mdx';
// eslint-disable-next-line import/no-unresolved
import 'organisms/next-links';
import './images/storybook.png';

const next: NextLink = [
  {
    title: 'Create a new component',
    text: 'Learn how to use wingsuit by building a new component.',
    link_title: 'continue',
    href: '/guides/create-component-guide',
  },
];

export const metadata = {
  title: 'Automated command line tool',
  description: 'This command creates a Wingsuit demo project.',
};
export default function Page() {
  return (
    <>
      <Mdx />
      <WingsuitPattern patternId="next_links" variables={{ items: next }} />
    </>
  );
}
