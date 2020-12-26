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
      className="col-span-1 col-start-1"
      ref={contentRef}
      initial="hidden"
      animate={animation}
      variants={scrollVariants}
    >
      <div>
        <h3 className="tw-label">Mi Rol</h3>
        {projectData.project?.role && (
          <div className="tw-pair">
            <p className="tw-value">{projectData.project.role[0].text}</p>
          </div>
        )}
      </div>

      {team && (
        <motion.div>
          <h3 className="tw-label tw-pair">Equipo</h3>

          {team.fields.map((member, index) => (
            <div className="tw-pair" tw-key={index}>
              <p className="tw-key">{member.member_role[0].text}</p>
              <p className="tw-value">{member.member_name[0].text}</p>
            </div>
          ))}
        </motion.div>
      )}
    </motion.section>
  );
};

export default ProjectTeam;
