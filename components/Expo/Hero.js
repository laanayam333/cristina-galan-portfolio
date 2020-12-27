import { motion } from 'framer-motion';

import { parentVariants, childVariants } from '@/utils/framer';

const Hero = ({ data }) => {
  return (
    <motion.section
      className="flex flex-col justify-center min-h-screen overflow-x-hidden w-full lg:w-2/3"
      variants={parentVariants}
    >
      <motion.div variants={childVariants}>
        <h2 className="text-lg lg:text-3xl 2xl:text-4xl text-gray-700 dark:text-gray-400 tw-paragraph">
          {data.location[0].text} '{data.year}
        </h2>

        <h1 className="mt-1 lg:mt-3 2xl:mt-4 text-3xl lg:text-6xl 2xl:text-7xl tw-subheading">
          {data.title[0].text}
        </h1>
      </motion.div>

      <motion.div className="mt-2 lg:mt-4 2xl:mt-5" variants={childVariants}>
        {data.description &&
          data.description.map((paragraph, index) => (
            <p className="tw-paragraph" key={index}>
              {paragraph.text}
            </p>
          ))}
      </motion.div>
    </motion.section>
  );
};

export default Hero;
