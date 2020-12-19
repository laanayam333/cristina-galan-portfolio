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
          className="custom-container custom-padding"
          ref={contentRef}
          initial="hidden"
          animate={animation}
          variants={scrollVariants}
        >
          <div className="flex w-full h-full justify-center items-center">
            <ReactPlayer url={video.primary.video_url.embed_url} />
          </div>
        </motion.section>
      )}
    </>
  );
};

export default Video;
