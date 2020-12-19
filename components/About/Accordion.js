import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { scrollVariants } from '@/utils/framer';

import Table from '@/components/About/Table';
import OpenTableIcon from '@/components/Icons/OpenTableIcon';

const Accordion = ({ table, index, onCursor }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleOpen = () => setIsExpanded(!isExpanded);

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
    <motion.li
      layout
      onClick={toggleOpen}
      ref={contentRef}
      initial="hidden"
      animate={animation}
      variants={scrollVariants}
    >
      <motion.div
        className="flex justify-between items-center"
        layout
        onClick={() => setIsExpanded(isExpanded ? false : index)}
      >
        <h2
          className={`custom-subheading text-2xl lg:text-5xl 2xl:text-6xl custom-animation ${
            isExpanded ? 'text-red-400' : ''
          }`}
          onMouseEnter={() => onCursor('hovered')}
          onMouseLeave={onCursor}
        >
          {table.primary.table_title[0].text}
        </h2>
        <div
          className={`custom-animation ${
            isExpanded ? 'transform rotate-90' : ''
          }`}
        >
          <OpenTableIcon />
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="mb-24 lg:mb-32 2xl:mb-36"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Table rows={table.fields} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export default Accordion;
