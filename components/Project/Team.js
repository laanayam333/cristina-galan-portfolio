import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { scrollVariants } from '@/utils/framer';

const ProjectTeam = ({ projectData, team }) => {
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
    <motion.section
      className="w-full lg:w-1/2"
      ref={contentRef}
      initial="hidden"
      animate={animation}
      variants={scrollVariants}
    >
      <div className="mb-4 lg:mb-6 2xl:mb-7">
        <h3 className="mb-2 lg:mb-4 2xl:mb-5 label">Mi Rol</h3>
        {projectData.project?.role && (
          <div className="flex mb-2 lg:mb-4 2xl:mb-5">
            <p className="value">{projectData.project.role[0].text}</p>
          </div>
        )}
      </div>

      {team && (
        <motion className="mb-4 lg:mb-6 2xl:mb-7">
          <h3 className="mb-2 lg:mb-4 2xl:mb-5 label">Equipo</h3>

          {team.fields.map((member, index) => (
            <div className="flex mb-2 lg:mb-4 2xl:mb-5" key={index}>
              <p className="key">{member.member_role[0].text}</p>
              <p className="value">{member.member_name[0].text}</p>
            </div>
          ))}
        </motion>
      )}
    </motion.section>
  );
};

export default ProjectTeam;
