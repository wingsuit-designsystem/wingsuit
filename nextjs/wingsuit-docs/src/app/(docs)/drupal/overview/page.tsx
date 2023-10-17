import Mdx from './index.mdx';
// eslint-disable-next-line import/no-unresolved
import 'organisms/next-links';

export const metadata = {
  title: 'Documents Overview',
  description: 'Wingsuit supports powerful MDX documentation out of the box.',
};
export default function Page() {
  return (
    <>
      <Mdx />
    </>
  );
}
