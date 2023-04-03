import DynamicLoading from '@/components/loading/dynamic';
import Localized from '@/components/localized';
import { persistor, wrapper } from '@/store';
import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <PersistGate persistor={persistor} loading={<DynamicLoading />}>
          <Localized>
            <Component {...pageProps} />
          </Localized>
        </PersistGate>
        <ToastContainer />
      </Provider>
    </>
  );
}
