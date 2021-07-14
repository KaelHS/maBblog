import '../styles/global.scss';
import { AppProps } from 'next/app';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.main}>
        <Header />
        <Component {...pageProps} />  
      </div>

    </div>
    </>
  );
}

export default MyApp
