import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import {
  getHomePage,
  getAllProjects,
  getCommercialProjects,
  getPersonalProjects
} from '@/lib/api';

import {
  useGlobalStateContext,
  useGlobalDispatchContext
} from '@/utils/context/global-context';

import { pageVariants } from '@/utils/framer';
import { WEB_NAME } from '@/utils/constants';

import Hero from '@/components/Home/Hero';
import Filters from '@/components/Home/Filters';
import Projects from '@/components/Home/Projects';
import Footer from '@/components/Home/Footer';

export default function HomePage({
  homePageData,
  allProjects,
  commercialProjects,
  personalProjects
}) {
  const [isSelectedAll, setIsSelectedAll] = useState(true);
  const [isSelectedCommercial, setIsSelectedCommercial] = useState(false);
  const [isSelectedPersonal, setIsSelectedPersonal] = useState(false);

  const [displayedProjects, setDisplayedProjects] = useState(allProjects);

  const dispatch = useGlobalDispatchContext();
  const { cursorStyles } = useGlobalStateContext();

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType });
  };

  //* filter methods *//
  const showAllProjects = () => {
    setDisplayedProjects(allProjects);
    setIsSelectedAll(true);
    setIsSelectedCommercial(false);
    setIsSelectedPersonal(false);
  };
  const showCommercialProjects = () => {
    setDisplayedProjects(commercialProjects);
    setIsSelectedCommercial(true);
    setIsSelectedAll(false);
    setIsSelectedPersonal(false);
  };
  const showPersonalProjects = () => {
    setDisplayedProjects(personalProjects);
    setIsSelectedPersonal(true);
    setIsSelectedAll(false);
    setIsSelectedCommercial(false);
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
          {homePageData.node.meta_title} | {WEB_NAME}
        </title>
        <meta name="description" content={homePageData.node.meta_description} />
      </Head>

      <div>
        <Hero homePageData={homePageData} onCursor={onCursor} />

        <Filters
          onCursor={onCursor}
          allProjectsLength={allProjects.length}
          commercialProjectsLength={commercialProjects.length}
          personalProjectsLength={personalProjects.length}
          isSelectedAll={isSelectedAll}
          isSelectedCommercial={isSelectedCommercial}
          isSelectedPersonal={isSelectedPersonal}
          showAllProjects={showAllProjects}
          showCommercialProjects={showCommercialProjects}
          showPersonalProjects={showPersonalProjects}
        />

        <Projects onCursor={onCursor} displayedProjects={displayedProjects} />

        <Footer onCursor={onCursor} />
      </div>
    </motion.main>
  );
}

export const getStaticProps = async () => {
  const homePageData = await getHomePage();
  const allProjects = await getAllProjects();
  const commercialProjects = await getCommercialProjects();
  const personalProjects = await getPersonalProjects();

  return {
    props: {
      homePageData,
      allProjects,
      commercialProjects,
      personalProjects
    }
  };
};
