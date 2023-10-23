import Mdx from './index.mdx';
// eslint-disable-next-line import/no-unresolved
import 'organisms/next-links';
import './images/kickstarter.png';

export const metadata = {
  title: 'Drupal Kickstarter',
  description: 'Kickstarter for Wingsuit.',
};
export default function Page() {
  return (
    <>
      <Mdx />
    </>
  );
}
