import { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { scrollVariants } from '@/utils/framer';

const Bio = ({ aboutPageData }) => {
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
      className="flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 lg:items-center lg:space-x-12 2xl:space-x-16 min-h-screen custom-container"
      ref={contentRef}
      initial="hidden"
      animate={animation}
      variants={scrollVariants}
    >
      <div className="w-3/4 lg:w-1/3 transform skew-x-3">
        <Image
          src={aboutPageData.artist_photo.url}
          alt={aboutPageData.artist_photo.alt}
          layout="responsive"
          width={aboutPageData.artist_photo.dimensions.width}
          height={aboutPageData.artist_photo.dimensions.height}
        />
      </div>

      <div className="w-full lg:w-2/3">
        {aboutPageData.bio &&
          aboutPageData.bio.map((paragraph, index) => (
            <p className="paragraph" key={index}>
              {paragraph.text}
            </p>
          ))}
      </div>
    </motion.section>
  );
};

export default Bio;
