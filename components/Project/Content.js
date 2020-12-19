import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { scrollVariants } from '@/utils/framer';

const ProjectContent = ({ projectData }) => {
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
      {projectData.project.description && (
        <motion.div
          className="flex flex-col space-y-6 lg:space-y-10 2xl:space-y-12 w-full lg:w-1/2 paragraph"
          ref={contentRef}
          initial="hidden"
          animate={animation}
          variants={scrollVariants}
        >
          {projectData.project.description.map((paragraph, index) => (
            <p className="leading-relaxed" key={index}>
              {paragraph.text}
            </p>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default ProjectContent;
