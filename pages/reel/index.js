import Head from 'next/head';
import { motion } from 'framer-motion';

import { getReelPage } from '@/lib/api';
import { WEB_NAME } from '@/utils/constants';
import { pageVariants } from '@/utils/framer';

import Hero from '@/components/Shared/Hero';
import Video from '@/components/Shared/Video';

export default function ReelPage({ reelPageData, video }) {
  return (
    <motion.main
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <Head>
        <title>
          {reelPageData.meta_title} | {WEB_NAME}
        </title>
        <meta
          name="description"
          content="The about page with links to social media profiles"
        />
      </Head>

      <Hero data={reelPageData} />

      <Video video={video} />
    </motion.main>
  );
}

export const getStaticProps = async () => {
  const reelPageData = await getReelPage();

  return {
    props: {
      reelPageData,
      video: reelPageData.body?.filter((elm) => elm.type === 'video')[0] ?? null
    }
  };
};
