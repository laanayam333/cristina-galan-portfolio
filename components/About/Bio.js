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
      className="grid grid-cols-1 lg:grid-cols-3 gap-y-20 lg:gap-y-0 lg:gap-x-28 2xl:gap-x-32 justify-center items-center min-h-screen tw-container"
      ref={contentRef}
      initial="hidden"
      animate={animation}
      variants={scrollVariants}
    >
      <div className="col-span-1 lg:col-span-1 transform skew-x-3 px-4 lg:px-0">
        <Image
          src={aboutPageData.artist_photo.url}
          alt={aboutPageData.artist_photo.alt}
          layout="responsive"
          width={aboutPageData.artist_photo.dimensions.width}
          height={aboutPageData.artist_photo.dimensions.height}
        />
      </div>

      <div className=" col-span-1 lg:col-span-2">
        {aboutPageData.bio &&
          aboutPageData.bio.map((paragraph, index) => (
            <p className="tw-paragraph" key={index}>
              {paragraph.text}
            </p>
          ))}
      </div>
    </motion.section>
  );
};

export default Bio;
