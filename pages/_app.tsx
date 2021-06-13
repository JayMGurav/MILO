import type { AppProps, NextWebVitalsMetric } from 'next/app';

import GloBalStyles from '@/styles/GlobalStyles';
import ThemeProvider from '@/context/themeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GloBalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric)
// }

export default MyApp;
