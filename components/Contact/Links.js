import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { scrollVariants } from '@/utils/framer';

const Links = ({ body, onCursor }) => {
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
    <motion.ul
      className="flex space-x-12 lg:space-x-24 2xl:space-x-28 tw-separator-t-sm"
      ref={contentRef}
      initial="hidden"
      animate={animation}
      variants={scrollVariants}
    >
      {body.map((link, index) => (
        <li
          key={index}
          onMouseEnter={() => onCursor('tw-hovered')}
          onMouseLeave={onCursor}
        >
          <a
            className="text-base lg:text-2xl 2xl:text-3xl tw-link"
            href={link.primary.link.url}
            target="_blank"
            rel="noopener"
          >
            {link.primary.name[0].text}
          </a>
        </li>
      ))}
    </motion.ul>
  );
};

export default Links;
