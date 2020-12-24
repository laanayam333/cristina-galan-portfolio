import { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { scrollVariants } from '@/utils/framer';

const Video = ({ video }) => {
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
          className="flex justify-center items-center w-screen h-full lg:h-screen custom-container custom-padding"
          ref={contentRef}
          initial="hidden"
          animate={animation}
          variants={scrollVariants}
        >
          <ReactPlayer
            url={video.primary.video_url.embed_url}
            width="100%"
            height="100%"
          />
        </motion.section>
      )}
    </>
  );
};

export default Video;
