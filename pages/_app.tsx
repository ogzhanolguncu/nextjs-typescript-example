import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import { Header } from 'components';
import { BookContextProvider } from 'context';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CSSReset />
      <BookContextProvider>
        <Header />
        <Component {...pageProps} />
      </BookContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
