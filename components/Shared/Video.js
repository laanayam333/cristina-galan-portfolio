import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { scrollVariants } from '@/utils/framer';

const Video = ({ video }) => {
  const [isPlayerLoaded, setIsPlayerLoaded] = useState(false);

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
    <>
      {video && (
        <motion.section
          className="flex items-center w-full h-screen tw-container mt-10 lg:mt-0 lg:h-screen"
          ref={contentRef}
          initial="hidden"
          animate={animation}
          variants={scrollVariants}
        >
          <div
            className={`w-full h-auto lg:h-full lg:py-14 2xl:py-16 transition-opacity duration-1000 ease-in-out ${
              isPlayerLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ReactPlayer
              url={video.primary.video_url.embed_url}
              width="100%"
              height="100%"
              onReady={() => setIsPlayerLoaded(true)}
            />
          </div>
        </motion.section>
      )}
    </>
  );
};

export default Video;
