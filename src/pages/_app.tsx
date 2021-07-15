import { ApolloProvider } from '@apollo/client';
import type { AppProps, NextWebVitalsMetric } from 'next/app';

import GloBalStyles from '@/styles/GlobalStyles';
import ThemeProvider from '@/context/themeContext';
import { useApollo } from '@/hooks/useApolloClient';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ThemeProvider>
      <GloBalStyles />
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric);
// }

export default MyApp;
