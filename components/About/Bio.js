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
      animation.start('animate');
    }
  }, [animation, inView]);

  return (
    <motion.section
      className="flex flex-col lg:flex-row min-h-screen tw-container mt-28 lg:mt-0 lg:items-center lg:justify-center lg:space-x-24"
      ref={contentRef}
      initial="initial"
      animate={animation}
      variants={scrollVariants}
    >
      <div className="w-full lg:w-2/3">
        {aboutPageData.bio &&
          aboutPageData.bio.map((paragraph, index) => (
            <p className="tw-paragraph" key={index}>
              {paragraph.text}
            </p>
          ))}
      </div>

      <div className="w-full lg:w-1/3 transform skew-x-3 skew-y-3 px-4 lg:px-0 tw-separator-t-sm">
        <Image
          src={aboutPageData.artist_photo.url}
          alt={aboutPageData.artist_photo.alt}
          layout="responsive"
          width={aboutPageData.artist_photo.dimensions.width}
          height={aboutPageData.artist_photo.dimensions.height}
        />
      </div>
    </motion.section>
  );
};

export default Bio;
