import { motion } from 'framer-motion';
import { parentVariants, childVariants } from '@/utils/framer';

const ProjectHero = ({ data }) => {
  return (
    <motion.section
      className="flex flex-col justify-end h-screen bg-cover lg:bg-cover bg-no-repeat bg-center lg:bg-fixed overflow-hidden custom-container whitespace-nowrap"
      variants={parentVariants}
      style={{
        backgroundImage: `url(${data.project.cover_photo.url})`
      }}
    >
      <motion.h1
        className="font-heading text-8xl lg:text-11xl 2xl:text-12xl text-white uppercase whitespace-normal leading-none"
        variants={childVariants}
      >
        {data.project.title[0].text}
      </motion.h1>
    </motion.section>
  );
};

export default ProjectHero;
