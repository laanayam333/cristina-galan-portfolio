import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { scrollVariants } from '@/utils/framer';

const Content = ({ projectData }) => {
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
      {projectData.project.description && (
        <motion.div
          className="col-span-2 col-start-1 lg:col-span-2 lg:col-start-3 row-span-full row-start-1 tw-paragraph"
          ref={contentRef}
          initial="initial"
          animate={animation}
          variants={scrollVariants}
        >
          {projectData.project.description.map((paragraph, index) => (
            <p key={index}>{paragraph.text}</p>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Content;
