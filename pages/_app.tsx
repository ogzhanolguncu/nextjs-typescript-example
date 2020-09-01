import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import '../styles/globals.css';
import Header from './components/navbar';
import { BookContextProvider } from './context/BookContext';

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
