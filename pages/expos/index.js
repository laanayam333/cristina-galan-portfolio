import Head from 'next/head';
import { motion } from 'framer-motion';

import { getExpoPage, getAllExpos } from '@/lib/api';
import { pageVariants } from '@/utils/framer';
import { WEB_NAME } from '@/utils/constants';

import {
  useGlobalStateContext,
  useGlobalDispatchContext
} from '@/utils/context/global-context';

import Hero from '@/components/Shared/Hero';
import List from '@/components/Expo/List';

export default function ExposPage({ exposPageData, exposData }) {
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
          {exposPageData.node.meta_title} | {WEB_NAME}
        </title>
        <meta
          name="description"
          content="The about page with links to social media profiles"
        />
      </Head>

      <Hero data={exposPageData.node} />

      <List exposData={exposData} onCursor={onCursor} />
    </motion.main>
  );
}

export const getStaticProps = async () => {
  const exposPageData = await getExpoPage();

  const exposData = await getAllExpos();

  return {
    props: { exposPageData, exposData }
  };
};
