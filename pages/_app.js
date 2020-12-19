import Head from 'next/head';
import { useRouter } from 'next/router';
import { CookiesProvider } from 'react-cookie';
import { AnimatePresence } from 'framer-motion';

import { GlobalProvider } from '@/utils/context/global-context';
import Layout from '@/components/Nav/Layout';

import '@/styles/index.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <CookiesProvider>
      <GlobalProvider>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Head>
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
            </Head>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </GlobalProvider>
    </CookiesProvider>
  );
}

export default MyApp;
