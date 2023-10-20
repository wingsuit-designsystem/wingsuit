// eslint-disable-next-line import/no-unresolved
import { NextLink } from '@/app/(docs)/layout';
import Mdx from './index.mdx';
// eslint-disable-next-line import/no-unresolved
import 'organisms/next-links';
// eslint-disable-next-line import/no-unresolved
import WingsuitPattern from '@/component/wingsuit-pattern';

const next: NextLink = [
  {
    title: 'Configure your app?',
    text: 'Check the parameters under the "App details" section and extend your wingsuit.config.js',
    link_title: 'Details',
    href: '/configurations/details',
  },
];

export const metadata = {
  title: 'Create new app',
  description: 'The wizard will guide you through app generation.',
};
export default function Page() {
  return (
    <>
      <Mdx />
      <WingsuitPattern patternId="next_links" variables={{ items: next }} />
    </>
  );
}
