import { useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { scrollVariants } from '@/utils/framer';

import BackIcon from '@/components/Icons/BackIcon';

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
    <motion.footer
      className="tw-container tw-separator-t tw-link"
      ref={contentRef}
      initial="hidden"
      animate={animation}
      variants={scrollVariants}
    >
      <Link href={slug}>
        <a
          className="flex items-center space-x-2 lg:space-x-4 2xl:space-x-5"
          onMouseEnter={() => onCursor('tw-hovered')}
          onMouseLeave={onCursor}
        >
          <BackIcon />
          <h4>{`${cta}`}</h4>
        </a>
      </Link>
    </motion.footer>
  );
};

export default Footer;
