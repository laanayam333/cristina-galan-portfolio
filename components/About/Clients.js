import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

import { scrollVariants } from '@/utils/framer';

import PlusIcon from '@/components/Icons/PlusIcon';
import MinusIcon from '@/components/Icons/MinusIcon';

const Clients = ({ clientsData, onCursor }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleOpen = () => setIsExpanded(!isExpanded);

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
      <motion.div
        layout
        initial="initial"
        animate={animation}
        variants={scrollVariants}
        ref={contentRef}
        onClick={toggleOpen}
      >
        <motion.div
          className="flex justify-between items-center"
          layout
          onClick={() => setIsExpanded(isExpanded ? false : true)}
          onMouseEnter={() => onCursor('tw-hovered')}
          onMouseLeave={onCursor}
        >
          <h2
            className={`tw-subheading text-xl lg:text-5xl 2xl:text-6xl tw-animation ${
              isExpanded ? 'text-red-400' : ''
            }`}
          >
            {clientsData[0].primary.clients_section_title[0].text}
          </h2>

          <div
            className={`tw-animation ${
              isExpanded ? 'transform rotate-180' : ''
            }`}
          >
            {!isExpanded && <PlusIcon />}
            {isExpanded && <MinusIcon />}
          </div>
        </motion.div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="tw-separator-t-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-20 xl:gap-28 2xl:gap-32">
                {clientsData[0].fields.map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.logos.url}
                    alt={logo.logos.alt}
                    layout="responsive"
                    width={logo.logos.dimensions.width}
                    height={logo.logos.dimensions.height}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Clients;
