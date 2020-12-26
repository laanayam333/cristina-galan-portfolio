import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { scrollVariants } from '@/utils/framer';

const CTA = ({ cta }) => {
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
    <motion.div
      className="overflow-hidden"
      ref={contentRef}
      initial="hidden"
      animate={animation}
      variants={scrollVariants}
    >
      {cta.map((paragraph, index) => (
        <p
          className="whitespace-pre tw-paragraph text-xl lg:text-5xl 2xl:text-6xl"
          key={index}
        >
          {paragraph.text}
        </p>
      ))}
    </motion.div>
  );
};

export default CTA;
