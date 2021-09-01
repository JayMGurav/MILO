import { ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

type PageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export type Props = AppProps & {
  Component: PageWithLayout;
};
