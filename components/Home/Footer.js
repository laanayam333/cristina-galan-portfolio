import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

import { scrollVariants } from '@/utils/framer';

const HomeFooter = ({ onCursor }) => {
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
      className="flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-8 lg:space-y-0 h-64 lg:h-72 2xl:h-80 tw-container "
      ref={contentRef}
      initial="hidden"
      animate={animation}
      variants={scrollVariants}
    >
      <div className="text-center lg:text-left">
        <a
          className="tw-link"
          href="mailto:cristina.galan.vargas@hotmail.com"
          onMouseEnter={() => onCursor('tw-hovered')}
          onMouseLeave={onCursor}
        >
          cristina.galan.vargas@hotmail.com
        </a>
      </div>

      <div className="flex lg:flex-col space-x-8 lg:space-x-0 lg:space-y-4 2xl:space-y-6 lg:text-right">
        <a
          className="tw-link"
          onMouseEnter={() => onCursor('tw-hovered')}
          onMouseLeave={onCursor}
          href="https://www.instagram.com/cristina_galan_vargas/?hl=en"
          target="_blank"
          rel="noopener"
        >
          Instagram
        </a>

        <a
          className="tw-link"
          onMouseEnter={() => onCursor('tw-hovered')}
          onMouseLeave={onCursor}
          href="https://www.linkedin.com/in/cristina-gal%C3%A1n-vargas-b878b598/"
          target="_blank"
          rel="noopener"
        >
          LinkedIn
        </a>

        <a
          className="tw-link"
          onMouseEnter={() => onCursor('tw-hovered')}
          onMouseLeave={onCursor}
          href="https://vimeo.com/user52102497"
          target="_blank"
          rel="noopener"
        >
          Vimeo
        </a>
      </div>
    </motion.footer>
  );
};

export default HomeFooter;
