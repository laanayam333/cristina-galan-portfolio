import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { scrollVariants, cardHover } from '@/utils/framer';

const ProjectCard = ({ project }) => {
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
      ref={contentRef}
      initial="hidden"
      animate={animation}
      variants={scrollVariants}
    >
      <Link href={`/projects/${project._meta.uid}`}>
        <a>
          <div className="flex">
            <p className="pr-1 lg:pr-3 2xl:pr-4 custom-card-text writing-mode-vertical-rl text-orientation-mixed">
              {project.year}
            </p>

            <div className="flex flex-col w-full h-full">
              <Image
                className="object-cover object-center transform hover:scale-110 transition duration-300 ease-in-out"
                src={project.cover_photo.url}
                alt={project.cover_photo.alt}
                layout="responsive"
                width={16}
                height={9}
              />

              <div className="flex flex-col">
                <p className="pt-1 lg:pt-3 2xl:pt-4 custom-card-text">
                  {project.category.name[0].text}
                </p>
                <p className="pt-0.5 lg:pt-1 2xl:pt-2 custom-card-title">
                  {project.title[0].text}
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
