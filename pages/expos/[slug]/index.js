import Head from 'next/head';
import { motion } from 'framer-motion';

import { getAllExposWithSlug, getExpo } from '@/lib/api';

import { pageVariants } from '@/utils/framer';
import { WEB_NAME } from '@/utils/constants';

import {
  useGlobalStateContext,
  useGlobalDispatchContext
} from '@/utils/context/global-context';

import Hero from '@/components/Expo/Hero';
import Video from '@/components/Shared/Video';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Shared/Footer';

export default function ExpoPage({ expo, gallery, video }) {
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
          {expo.title[0].text} | {WEB_NAME}
        </title>
        <meta
          name="description"
          content="The about page with links to social media profiles"
        />
      </Head>

      <article className="grid grid-cols-1 lg:grid-cols-5 gap-x-20 lg:gap-x-28 2xl:gap-x-32 tw-container">
        <div className="col-start-1 col-span-1 lg:col-span-2">
          <Hero data={expo} onCursor={onCursor} />
        </div>

        <div className="flex flex-col justify-center items-center col-start-1 col-span-1 lg:col-start-3 lg:col-span-3">
          <div className="tw-container">
            <Gallery gallery={gallery} onCursor={onCursor} />
          </div>

          <Video video={video} />
        </div>
      </article>

      <Footer cta="Vuelve a expos" slug={'/expos'} onCursor={onCursor} />
    </motion.main>
  );
}

export const getStaticProps = async ({ params }) => {
  const expoData = (await getExpo(params.slug)) || {};

  return {
    props: {
      expoData,
      expo: expoData?.expo ?? {},
      gallery:
        expoData?.expo?.body?.filter((elm) => elm.type === 'gallery')[0] ??
        null,
      video:
        expoData?.expo?.body?.filter((elm) => elm.type === 'video')[0] ?? null
    }
  };
};

export const getStaticPaths = async () => {
  const expos = await getAllExposWithSlug();

  return {
    paths:
      expos?.map((elm) => {
        return {
          params: { slug: elm.node._meta.uid }
        };
      }) || [],
    fallback: false
  };
};
