import type { NextPage } from 'next';
// eslint-disable-next-line import/no-unresolved
import 'templates/docs';

import { Inter } from 'next/font/google';
import WingsuitPattern from '@/component/wingsuit-pattern';

const inter = Inter({ subsets: ['latin'] });

export interface NextLink {
  title: string;
  text: string;
  link_title: string;
  href: string;
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  return <WingsuitPattern patternId="docs">{children}</WingsuitPattern>;
}
