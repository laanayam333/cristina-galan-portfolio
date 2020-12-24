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
      className="row-span-1 col-span-full lg:col-span-1 lg:col-start-2"
      ref={contentRef}
      initial="hidden"
      animate={animation}
      variants={scrollVariants}
    >
      <div className="mb-4 lg:mb-6 2xl:mb-7">
        <h3 className="label">Créditos</h3>
        {projectData.project.title && (
          <div className="pair">
            <p className="key">Proyecto</p>
            <p className="value ">{projectData.project.title[0].text}</p>
          </div>
        )}

        {projectData.project.category && (
          <div className="pair">
            <p className="key">Categoría</p>
            <p className="value ">
              {projectData.project.category.name[0].text}
            </p>
          </div>
        )}

        {projectData.project.type && (
          <div className="pair">
            <p className="key">Tipo</p>
            <p className="value ">{projectData.project.type.name[0].text}</p>
          </div>
        )}

        {agency && (
          <div className="pair">
            <p className="key">Agencia</p>
            <p className="value ">{agency.primary.name[0].text}</p>
          </div>
        )}

        {client && (
          <div className="pair">
            <p className="key">Cliente</p>
            <p className="value ">{client.primary.name[0].text}</p>
          </div>
        )}

        {projectData.project.year && (
          <div className="pair">
            <p className="key">Año</p>
            <p className="value ">{projectData.project.year}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectInfo;
