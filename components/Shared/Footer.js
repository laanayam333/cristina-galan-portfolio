import { useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { scrollVariants } from '@/utils/framer';

const Footer = ({ cta, slug, onCursor }) => {
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
      className="custom-link custom-container custom-mt custom-mb"
      ref={contentRef}
      initial="hidden"
      animate={animation}
      variants={scrollVariants}
    >
      <Link href={slug}>
        <a
          className="flex items-center space-x-4"
          onMouseEnter={() => onCursor('hovered')}
          onMouseLeave={onCursor}
        >
          <h4>{`<< ${cta}`}</h4>
        </a>
      </Link>
    </motion.section>
  );
};

export default Footer;
