import { GlobalStyle } from '../styles/globals.js';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    <GlobalStyle />
    </>
  );
}

export default MyApp
