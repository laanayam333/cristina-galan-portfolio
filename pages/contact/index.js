import Head from 'next/head';
import { motion } from 'framer-motion';

import {
  useGlobalStateContext,
  useGlobalDispatchContext
} from '@/utils/context/global-context';
import { pageVariants } from '@/utils/framer';

import { getContactPage } from '@/lib/api';
import { WEB_NAME } from '@/utils/constants';

import Hero from '@/components/Shared/Hero';
import CTA from '@/components/Contact/CTA';
import Links from '@/components/Contact/Links';

export default function ContactPage({ contactPageData }) {
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles } = useGlobalStateContext();

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType });
  };

  return (
    <motion.main
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <Head>
        <title>
          {contactPageData.page_title[0].text} | {WEB_NAME}
        </title>
        <meta
          name="description"
          content="The about page with links to social media profiles"
        />
      </Head>

      <Hero data={contactPageData} />

      <section className="flex flex-col justify-center h-screen custom-container">
        <CTA cta={contactPageData.cta} />
        <Links body={contactPageData.body} onCursor={onCursor} />
      </section>
    </motion.main>
  );
}

export const getStaticProps = async () => {
  const contactPageData = await getContactPage();

  return {
    props: {
      contactPageData
    }
  };
};
