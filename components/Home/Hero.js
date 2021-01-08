import { motion } from 'framer-motion';

import { parentVariants, childVariants } from '@/utils/framer';
import DownIcon from '@/components/Icons/DownIcon';

const Hero = ({ homePageData, onCursor }) => {
  return (
    <motion.section
      className="flex flex-col h-screen justify-end space-y-2.5 lg:space-y-7 2xl:space-y-8 overflow-hidden tw-container-sm"
      variants={parentVariants}
    >
      <motion.h2
        className="flex flex-col text-right text-base lg:text-2xl 2xl:text-3xl font-bold uppercase leading-relaxed"
        variants={childVariants}
      >
        <span className="block text-gray-700 dark:text-gray-300 tw-animation">
          {homePageData.node.profession[0].text}
        </span>
        <span className="block text-gray-400 dark:text-gray-600 tw-animation">
          {homePageData.node.headquarters[0].text}
        </span>
      </motion.h2>

      <div className="flex flex-col lg:flex-row justify-betwen">
        <motion.h1 variants={childVariants}>
          <span className="block font-heading text-9xl lg:text-12xl 2xl:text-14xl uppercase">
            {homePageData.node.name[0].text}
          </span>
        </motion.h1>
        <motion.div
          className="flex text-gray-400 hover:text-red-400 tw-animation justify-center my-5 lg:m-auto"
          variants={childVariants}
          onMouseEnter={() => onCursor('tw-hovered')}
          onMouseLeave={onCursor}
        >
          <a href={`${homePageData && '#projects'}`}>
            <DownIcon />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
