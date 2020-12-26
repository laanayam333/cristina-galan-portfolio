import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { scrollVariants } from '@/utils/framer';

const ProjectInfo = ({ projectData, agency, client }) => {
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
    <motion.div
      className="col-span-1 col-start-2"
      ref={contentRef}
      initial="hidden"
      animate={animation}
      variants={scrollVariants}
    >
      <div>
        <h3 className="tw-label ">Créditos</h3>
        {projectData.project.title && (
          <div className="tw-pair">
            <p className="tw-key">Proyecto</p>
            <p className="tw-value ">{projectData.project.title[0].text}</p>
          </div>
        )}

        {projectData.project.category && (
          <div className="tw-pair">
            <p className="tw-key">Categoría</p>
            <p className="tw-value ">
              {projectData.project.category.name[0].text}
            </p>
          </div>
        )}

        {projectData.project.type && (
          <div className="tw-pair">
            <p className="tw-key">Tipo</p>
            <p className="tw-value ">{projectData.project.type.name[0].text}</p>
          </div>
        )}

        {agency && (
          <div className="tw-pair">
            <p className="tw-key">Agencia</p>
            <p className="tw-value ">{agency.primary.name[0].text}</p>
          </div>
        )}

        {client && (
          <div className="tw-pair">
            <p className="tw-key">Cliente</p>
            <p className="tw-value ">{client.primary.name[0].text}</p>
          </div>
        )}

        {projectData.project.year && (
          <div className="tw-pair">
            <p className="tw-key">Año</p>
            <p className="tw-value ">{projectData.project.year}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectInfo;
