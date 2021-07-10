import { ApolloProvider } from '@apollo/client';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { AnimatePresence } from 'framer-motion';

import GloBalStyles from '@/styles/GlobalStyles';
import ThemeProvider from '@/context/themeContext';
import { useApollo } from '@/hooks/useApolloClient';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ThemeProvider>
      <GloBalStyles />
      <ApolloProvider client={apolloClient}>
        {/* <AnimatePresence exitBeforeEnter> */}
        <Component {...pageProps} />
        {/* </AnimatePresence> */}
      </ApolloProvider>
    </ThemeProvider>
  );
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric)
// }

export default MyApp;
