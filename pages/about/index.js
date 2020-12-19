import Head from 'next/head';
import { motion, AnimateSharedLayout } from 'framer-motion';

import {
  useGlobalDispatchContext,
  useGlobalStateContext
} from '@/utils/context/global-context';

import { getAboutPageData } from '@/lib/api';
import { pageVariants } from '@/utils/framer';
import { WEB_NAME } from '@/utils/constants';

import Hero from '@/components/Shared/Hero';
import Bio from '@/components/About/Bio';
import Clients from '@/components/About/Clients';
import Accordion from '@/components/About/Accordion';

export default function AboutPage({ aboutPageData, tableData, clientsData }) {
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
          {aboutPageData.meta_title} | {WEB_NAME}
        </title>
        <meta
          name="description"
          content="The about page with links to social media profiles"
        />
      </Head>

      <article initial="hidden" animate="visible" exit="exit">
        <Hero data={aboutPageData} />

        <Bio aboutPageData={aboutPageData} />

        <AnimateSharedLayout>
          <section className="custom-padding custom-container custom-mt">
            <motion.ul
              className="flex flex-col space-y-12 lg:space-y-20 2xl:space-y-24"
              layout
              initial={{ borderRadius: 10 }}
            >
              {tableData.map((table, index) => (
                <Accordion key={index} table={table} onCursor={onCursor} />
              ))}
              <Clients clientsData={clientsData} />
            </motion.ul>
          </section>
        </AnimateSharedLayout>
      </article>
    </motion.main>
  );
}

export const getStaticProps = async () => {
  const aboutPageData = await getAboutPageData();

  const clientsData = aboutPageData.body.filter(
    (elm) => elm.type === 'clients'
  );

  const tableData = aboutPageData.body.filter((elm) => elm.type === 'table');

  return {
    props: { aboutPageData, tableData, clientsData }
  };
};
