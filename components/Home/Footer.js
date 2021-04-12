import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

import { scrollVariants } from '@/utils/framer';

const Footer = ({ onCursor }) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

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
    <motion.footer
      className="mb-5 lg:mb-7 2xl:mb-8 tw-container  tw-separator-t-lg"
      ref={contentRef}
      initial="initial"
      animate={animation}
      variants={scrollVariants}
    >
      <motion.div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-8 lg:space-y-0 h-40 lg:h-58 2xl:h-64">
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

        <div className="flex lg:flex-col justify-between w-full mt-5 lg:mt-0 lg:space-y-7 2xl:space-y-8 lg:text-right">
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
      </motion.div>

      <div className="text-center tw-separator-t">
        <small className="text-xs lg:text-sm 2xl:text-base text-gray-400 dark:text-gray-700 tw-animation">
          © {year} Cristina Galán.{' '}
          <span>
            Web creada por{' '}
            <a
              className="italic"
              onMouseEnter={() => onCursor('tw-hovered')}
              onMouseLeave={onCursor}
              href="https://luis-anaya-portfolio.vercel.app/"
              target="_blank"
              rel="noopener"
            >
              Luis Anaya
            </a>
            .
          </span>
        </small>
      </div>
    </motion.footer>
  );
};

export default Footer;
