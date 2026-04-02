import type { NextPage } from 'next';
// eslint-disable-next-line import/no-unresolved
import 'templates/docs';

import WingsuitPattern from '@/component/wingsuit-pattern';

export interface NextLink {
  title: string;
  text?: string;
  link_title: string;
  href: string;
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    /* @ts-expect-error Server Component */
    <WingsuitPattern patternId="docs">{children}</WingsuitPattern>
  );
}
