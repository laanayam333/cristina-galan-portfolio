import { motion } from 'framer-motion';
import { parentVariants, childVariants } from '@/utils/framer';

const Hero = ({ data }) => {
  return (
    <motion.section
      className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen overflow-hidden flex items-end -z-1 tw-container-sm"
      variants={parentVariants}
    >
      <motion.h1
        className="tw-page-title text-gray-100 dark:text-gray-900 tw-animation"
        variants={childVariants}
      >
        {data.page_title[0].text}
      </motion.h1>
    </motion.section>
  );
};

export default Hero;
