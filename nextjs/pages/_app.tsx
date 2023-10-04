import '../../source/default/tokens/tokens.css';
import { Inter } from 'next/font/google';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage, Metadata } from 'next';
import type { AppProps } from 'next/app';

export interface Next {
  title: string;
  text: string;
  link_title: string;
  href: string;
}

const inter = Inter({ subsets: ['latin'] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, layout: string, metadata: Metadata, next?: Next[]) => ReactNode;
  metadata: Metadata;
  next?: Next[];
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function DocsApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  pageProps.metadata = Component.metadata ?? {
    title: 'Wingsuit',
    description: '',
  };
  return getLayout(
    <Component {...pageProps} />,
    pageProps.layout,
    pageProps.metadata,
    Component.next || []
  );
}
