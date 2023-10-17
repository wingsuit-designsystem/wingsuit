// eslint-disable-next-line import/no-unresolved
import { NextLink } from '@/app/(docs)/layout';
// eslint-disable-next-line import/no-unresolved
import WingsuitPattern from '@/component/wingsuit-pattern';
import Mdx from './index.mdx';
// eslint-disable-next-line import/no-unresolved
import 'organisms/next-links';

const next: NextLink = [
  {
    title: 'Configure your app?',
    text: 'Check the parameters under the "App details" section and extend your wingsuit.config.js',
    link_title: 'Details',
    href: '/configurations/details',
  },
];

export const metadata = {
  title: 'Showroom',
  description: 'Display storybook components for your customer.',
};
export default function Page() {
  return (
    <>
      <Mdx />
      <WingsuitPattern patternId="next_links" variables={{ items: next }} />
    </>
  );
}
