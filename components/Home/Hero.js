import { motion } from 'framer-motion';

import { parentVariants, childVariants } from '@/utils/framer';

const Hero = ({ homePageData }) => {
  return (
    <motion.section
      className="flex flex-col h-screen justify-center lg:justify-end space-y-10 lg:space-y-28 2xl:space-y-32 overflow-hidden tw-container-sm"
      variants={parentVariants}
    >
      <motion.h2
        className="flex flex-col space-y-0.5 lg:space-y-1 2xl:space-y-1.5 text-right text-base lg:text-2xl 2xl:text-3xl font-bold uppercase"
        variants={childVariants}
      >
        <span className="block text-gray-700 dark:text-gray-300 tw-animation">
          {homePageData.node.profession[0].text}
        </span>
        <span className="block text-gray-400 dark:text-gray-600 tw-animation">
          {homePageData.node.headquarters[0].text}
        </span>
      </motion.h2>

      <motion.h1 variants={childVariants}>
        <span className="block font-heading text-9xl lg:text-12xl 2xl:text-14xl uppercase">
          {homePageData.node.name[0].text}
        </span>
      </motion.h1>
    </motion.section>
  );
};

export default Hero;
