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
      animation.start('animate');
    }
  }, [animation, inView]);

  return (
    <>
      {video && (
        <motion.section
          className="flex items-center h-screen lg:py-28 2xl:py-32 bg-gray-100 dark:bg-gray-900 tw-container-sm"
          id="player"
          ref={contentRef}
          initial="initial"
          animate={animation}
          variants={scrollVariants}
        >
          <div
            className={`w-full h-full transition-opacity duration-1000 ease-in-out ${
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
