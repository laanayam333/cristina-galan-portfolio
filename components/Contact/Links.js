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
      className="flex space-x-8 lg:space-x-24 2xl:space-x-28 custom-mt"
      ref={contentRef}
      initial="hidden"
      animate={animation}
      variants={scrollVariants}
    >
      {body.map((link, index) => (
        <li
          key={index}
          onMouseEnter={() => onCursor('hovered')}
          onMouseLeave={onCursor}
        >
          <a
            className="custom-link"
            href={link.primary.link.url}
            target="_blank"
          >
            {link.primary.name[0].text}
          </a>
        </li>
      ))}
    </motion.ul>
  );
};

export default Links;