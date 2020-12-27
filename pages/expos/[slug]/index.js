import Head from 'next/head';
import { motion } from 'framer-motion';

import { getAllExposWithSlug, getExpo, getExpoPage } from '@/lib/api';

import { pageVariants } from '@/utils/framer';
import { WEB_NAME } from '@/utils/constants';

import {
  useGlobalStateContext,
  useGlobalDispatchContext
} from '@/utils/context/global-context';

import Hero from '@/components/Expo/Hero';
import Video from '@/components/Shared/Video';
import Gallery from '@/components/Gallery';
import BackBtn from '@/components/Shared/BackBtn';

export default function ExpoPage({ expo, gallery, video, cta }) {
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles } = useGlobalStateContext();

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;

    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType });
  };

  return (
    <motion.main
      className="tw-container tw-separator-b"
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

      <Hero data={expo} onCursor={onCursor} />

      <div className="flex flex-col">
        <Gallery gallery={gallery} onCursor={onCursor} />

        <Video video={video} />
      </div>

      <BackBtn cta={cta} slug={'/expos'} onCursor={onCursor} />
    </motion.main>
  );
}

export const getStaticProps = async ({ params }) => {
  const expoData = (await getExpo(params.slug)) || {};

  const data = await getExpoPage();

  return {
    props: {
      cta: data?.node.cta[0].text,
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
          params: {
            slug: elm.node._meta.uid
          }
        };
      }) || [],
    fallback: false
  };
};
