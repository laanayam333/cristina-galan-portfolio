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
      animation.start('animate');
    }
  }, [animation, inView]);

  return (
    <motion.div
      className="overflow-hidden"
      ref={contentRef}
      initial="initial"
      animate={animation}
      variants={scrollVariants}
    >
      {cta.map((paragraph, index) => (
        <p
          className="whitespace-pre tw-paragraph text-lg lg:text-3xl 2xl:text-4xl"
          key={index}
        >
          {paragraph.text}
        </p>
      ))}
    </motion.div>
  );
};

export default CTA;
