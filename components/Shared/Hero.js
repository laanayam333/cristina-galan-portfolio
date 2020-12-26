import { motion } from 'framer-motion';
import { parentVariants, childVariants } from '@/utils/framer';

const Hero = ({ data }) => {
  return (
    <motion.section
      className="flex flex-col justify-center lg:justify-end h-screen overflow-hidden"
      variants={parentVariants}
    >
      <motion.h1
        className="tw-page-title lg:hidden self-end text-gray-500"
        variants={childVariants}
      >
        {data.page_title[0].text}
      </motion.h1>
      <motion.h1 className="tw-page-title" variants={childVariants}>
        {data.page_title[0].text}
      </motion.h1>
    </motion.section>
  );
};

export default Hero;
