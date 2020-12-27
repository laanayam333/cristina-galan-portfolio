import { motion } from 'framer-motion';

import { parentVariants, childVariants } from '@/utils/framer';

import DownIcon from '@/components/Icons/DownIcon';

const Hero = ({ data, onCursor, video, gallery }) => {
  return (
    <motion.section
      className="flex flex-col justify-center h-screen overflow-hidden tw-container"
      variants={parentVariants}
    >
      <motion.div variants={childVariants}>
        <h2 className="text-lg lg:text-2xl 2xl:text-3xl text-gray-700 dark:text-gray-400 tw-paragraph">
          {data.location[0].text} '{data.year}
        </h2>

        <h1 className="mt-1 lg:mt-3 2xl:mt-4 text-3xl lg:text-5xl 2xl:text-6xl tw-subheading">
          {data.title[0].text}
        </h1>
      </motion.div>

      <motion.div className="tw-separator-t-xs" variants={childVariants}>
        {data.description &&
          data.description.map((paragraph, index) => (
            <p className="tw-paragraph" key={index}>
              {paragraph.text}
            </p>
          ))}
      </motion.div>

      <motion.div
        className="tw-separator-t-xxs self-center"
        variants={childVariants}
        onMouseEnter={() => onCursor('tw-hovered')}
        onMouseLeave={onCursor}
      >
        <a
          href={`${
            (video && '#player') ||
            (gallery && '#gallery') ||
            (video && gallery && '#player')
          }`}
        >
          <DownIcon />
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
