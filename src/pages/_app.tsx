import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { NextWebVitalsMetric } from 'next/app';

import GloBalStyles from '@/styles/GlobalStyles';
import ThemeProvider from '@/context/themeContext';
import { useApollo } from '@/hooks/useApolloClient';
import { Props } from '@/types/next';

function MyApp({ Component, pageProps }: Props) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return (
    <ThemeProvider>
      <GloBalStyles />
      <ApolloProvider client={apolloClient}>
        {getLayout(<Component {...pageProps} />)}
      </ApolloProvider>
    </ThemeProvider>
  );
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric);
// }

export default MyApp;
