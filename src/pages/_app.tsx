import Localized from '@/components/localized';
import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient()) 

  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Localized>
            <Component {...pageProps} />
          </Localized>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
