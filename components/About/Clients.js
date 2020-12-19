import { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { scrollVariants } from '@/utils/framer';

const Clients = ({ clientsData }) => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

  return (
    <motion.section
      className="flex flex-col custom-mt"
      ref={contentRef}
      initial="hidden"
      animate={animation}
      variants={scrollVariants}
    >
      <h2 className="custom-subheading text-2xl lg:text-5xl 2xl:text-6xl">
        {clientsData[0].primary.clients_section_title[0].text}
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-x-20 gap-y-16 lg:gap-x-52 lg:gap-y-24 2xl:gap-x-64 2xl:gap-y-32 custom-mt">
        {clientsData[0].fields.map((logo, index) => (
          <Image
            key={index}
            src={logo.logos.url}
            alt={logo.logos.alt}
            layout="responsive"
            width={logo.logos.dimensions.width}
            height={logo.logos.dimensions.height}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Clients;
