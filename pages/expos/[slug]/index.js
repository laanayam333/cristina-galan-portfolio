import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { getAllExposWithSlug, getExpo } from '@/lib/api';

import { pageVariants } from '@/utils/framer';
import { WEB_NAME } from '@/utils/constants';

import {
  useGlobalStateContext,
  useGlobalDispatchContext
} from '@/utils/context/global-context';

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

      <article>
        <section className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 space-x-0 lg:space-x-12 min-h-screen custom-container custom-padding">
          <div className="w-full lg:w-1/2">
            <Image
              src={expo.cover_photo.url}
              alt={expo.cover_photo.alt}
              layout="responsive"
              width={expo.cover_photo.dimensions.width}
              height={expo.cover_photo.dimensions.height}
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="custom-card-text text-gray-700 dark:text-gray-400 custom-animation">
              '{expo.year} {expo.location[0].text}
            </h2>
            <h1 className="mt-0.5 lg:mt-1 2xl:mt-2 custom-card-title">
              {expo.title[0].text}
            </h1>
            <div className="mt-2 lg:mt-4 2xl:mt-5">
              {expo.description &&
                expo.description.map((paragraph, index) => (
                  <p className="paragraph" key={index}>
                    {paragraph.text}
                  </p>
                ))}
            </div>
          </div>
        </section>

        <Gallery gallery={gallery} onCursor={onCursor} />

        <Video video={video} />
      </article>

      <Footer slug="/expos" cta="Vuelve a expos" onCursor={onCursor} />
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
