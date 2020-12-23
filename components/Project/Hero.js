import { motion } from 'framer-motion';
import Image from 'next/image';

import { parentVariants, childVariants } from '@/utils/framer';

const Hero = ({ data }) => {
  return (
    <motion.section
      className="flex flex-col justify-end h-screen bg-cover lg:bg-cover bg-no-repeat bg-center lg:bg-fixed overflow-hidden custom-container whitespace-nowrap"
      variants={parentVariants}
    >
      <Image
        className="z-10 object-center object-cover pointer-events-none"
        src={data.project.cover_photo.url}
        alt={data.project.cover_photo.alt}
        layout="fill"
      />
      <motion.h1
        className="z-99 font-heading text-8xl lg:text-11xl 2xl:text-12xl text-white uppercase whitespace-normal leading-none"
        variants={childVariants}
      >
        {data.project.title[0].text}
      </motion.h1>
    </motion.section>
  );
};

export default Hero;
