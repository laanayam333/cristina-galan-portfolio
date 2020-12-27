import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { scrollVariants } from '@/utils/framer';

import FilterBtn from '@/components/Home/Filter';

const Filters = ({
  onCursor,
  isSelectedAll,
  isSelectedCommercial,
  isSelectedPersonal,
  showAllProjects,
  showCommercialProjects,
  showPersonalProjects,
  allProjectsLength,
  personalProjectsLength,
  commercialProjectsLength
}) => {
  //* animation
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
    <motion.section
      className="tw-container tw-separator-t"
      ref={contentRef}
      animate={animation}
      initial="initial"
      variants={scrollVariants}
    >
      <div className="flex justify-between">
        <FilterBtn
          method={showAllProjects}
          isSelected={isSelectedAll}
          label="Todos"
          length={allProjectsLength}
          onCursor={onCursor}
        />

        <FilterBtn
          method={showCommercialProjects}
          isSelected={isSelectedCommercial}
          label="Comercial"
          length={commercialProjectsLength}
          onCursor={onCursor}
        />

        <FilterBtn
          method={showPersonalProjects}
          isSelected={isSelectedPersonal}
          label="Personal"
          length={personalProjectsLength}
          onCursor={onCursor}
        />
      </div>
    </motion.section>
  );
};

export default Filters;
