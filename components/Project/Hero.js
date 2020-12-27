import { motion } from 'framer-motion';
import Image from 'next/image';

import { parentVariants, childVariants } from '@/utils/framer';

const Hero = ({ data }) => {
  return (
    <motion.section
      className="flex items-center lg:items-end h-screen bg-cover lg:bg-cover bg-no-repeat bg-center lg:bg-fixed overflow-hidden tw-container-sm lg:pb-14 2xl:pb-16"
      variants={parentVariants}
    >
      <Image
        className="z-10"
        src={data.project.cover_photo.url}
        alt={data.project.cover_photo.alt}
        objectFit="cover"
        objectPosition="center"
        layout="fill"
        quality={100}
        priority
        loading="eager"
      />
      <motion.h1
        className="z-99 font-heading text-9xl lg:text-11xl 2xl:text-12xl text-white uppercase whitespace-normal"
        variants={childVariants}
      >
        {data.project.title[0].text}
      </motion.h1>
    </motion.section>
  );
};

export default Hero;
