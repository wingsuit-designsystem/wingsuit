// import WingsuitPattern from '@/component/wingsuit-pattern';
import Mdx from './index.mdx';
// eslint-disable-next-line import/no-unresolved
import 'organisms/next-links';

export const metadata = {
  title: 'MDX Docs',
  description: 'Document your components with MDX.',
};
export default function Page() {
  return (
    <>
      <Mdx />
    </>
  );
}
