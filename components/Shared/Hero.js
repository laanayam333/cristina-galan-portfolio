import { motion } from 'framer-motion';
import { parentVariants, childVariants } from '@/utils/framer';

const Hero = ({ data }) => {
  return (
    <motion.section
      className="flex flex-col justify-center lg:justify-end h-screen overflow-hidden custom-container"
      variants={parentVariants}
    >
      <motion.h1
        className="lg:hidden self-end font-heading text-10xl lg:text-12xl uppercase leading-none pointer-events-none"
        variants={childVariants}
      >
        {data.page_title[0].text}
      </motion.h1>
      <motion.h1
        className="font-heading text-10xl lg:text-13xl 2xl:text-14xl uppercase leading-none pointer-events-none"
        variants={childVariants}
      >
        {data.page_title[0].text}
      </motion.h1>
    </motion.section>
  );
};

export default Hero;
