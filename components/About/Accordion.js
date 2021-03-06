import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

import { scrollVariants } from '@/utils/framer';

import Table from '@/components/About/Table';
import PlusIcon from '@/components/Icons/PlusIcon';
import MinusIcon from '@/components/Icons/MinusIcon';

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
      animation.start('animate');
    }
  }, [animation, inView]);

  return (
    <motion.li
      layout
      ref={contentRef}
      initial="initial"
      animate={animation}
      variants={scrollVariants}
      onClick={toggleOpen}
    >
      <motion.div
        layout
        className="flex justify-between items-center"
        onClick={() => setIsExpanded(isExpanded ? false : index)}
        onMouseEnter={() => onCursor('tw-hovered')}
        onMouseLeave={onCursor}
      >
        <h2
          className={`tw-subheading text-xl lg:text-5xl 2xl:text-6xl tw-animation ${
            isExpanded ? 'text-red-400' : ''
          }`}
        >
          {table.primary.table_title[0].text}
        </h2>

        <div
          className={`tw-animation ${isExpanded ? 'transform rotate-180' : ''}`}
        >
          {!isExpanded && <PlusIcon />}
          {isExpanded && <MinusIcon />}
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            layout
            className="tw-separator-t-sm"
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
