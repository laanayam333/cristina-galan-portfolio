import Head from 'next/head';
import { motion } from 'framer-motion';

import {
  useGlobalStateContext,
  useGlobalDispatchContext
} from '@/utils/context/global-context';

import { getAllProjectsWithSlug, getProject } from '@/lib/api';
import { pageVariants } from '@/utils/framer';
import { WEB_NAME } from '@/utils/constants';

import Hero from '@/components/Project/Hero';
import Info from '@/components/Project/Info';
import Content from '@/components/Project/Content';
import Team from '@/components/Project/Team';
import Gallery from '@/components/Gallery';
import Video from '@/components/Shared/Video';
import Footer from '@/components/Shared/Footer';

export default function ProjectPage({
  projectData,
  agency,
  client,
  team,
  video,
  gallery
}) {
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
          {projectData.project.title[0].text} | {WEB_NAME}
        </title>
        <meta
          name="description"
          content="The about page with links to social media profiles"
        />
      </Head>

      <Hero data={projectData} />

      <section className="flex flex-col lg:flex-row-reverse custom-padding custom-container">
        <Content projectData={projectData} />
        <div className="flex flex-col w-full lg:w-1/2 lg:flex-row custom-mt lg:mt-0">
          <Team projectData={projectData} team={team} />
          <Info projectData={projectData} agency={agency} client={client} />
        </div>
      </section>

      <Gallery gallery={gallery} onCursor={onCursor} />

      <Video video={video} />

      <Footer cta="Vuelve a projectos" slug={'/'} onCursor={onCursor} />
    </motion.main>
  );
}

export const getStaticProps = async ({ params }) => {
  const projectData = (await getProject(params.slug)) || {};

  return {
    props: {
      projectData,

      project: projectData?.project ?? {},

      agency:
        projectData.project.body?.filter((elm) => elm.type === 'agency')[0] ??
        null,

      client:
        projectData.project.body?.filter((elm) => elm.type === 'client')[0] ??
        null,

      team:
        projectData.project.body?.filter((elm) => elm.type === 'team')[0] ??
        null,

      video:
        projectData.project.body?.filter((elm) => elm.type === 'video')[0] ??
        null,

      gallery:
        projectData.project.body?.filter((elm) => elm.type === 'gallery')[0] ??
        null
    }
  };
};

export const getStaticPaths = async () => {
  const projects = await getAllProjectsWithSlug();

  return {
    paths:
      projects?.map((elm) => {
        return {
          params: { slug: elm.node._meta.uid }
        };
      }) || [],
    fallback: false
  };
};
