import { motion } from 'framer-motion';

import { parentVariants, childVariants } from '@/utils/framer';

const Hero = ({ data }) => {
  return (
    <motion.section
      className="flex flex-col justify-center mt-20 lg:mt-0 lg:min-h-screen"
      variants={parentVariants}
    >
      <motion.h2 className="tw-card-text" variants={childVariants}>
        {data.location[0].text} '{data.year}
      </motion.h2>

      <motion.h1
        className="mt-1 lg:mt-3 2xl:mt-4 tw-card-title"
        variants={childVariants}
      >
        {data.title[0].text}
      </motion.h1>

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
