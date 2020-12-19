import { useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { scrollVariants } from '@/utils/framer';

const Card = ({ expo, onCursor }) => {
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
      className="w-full h-48 lg:h-72 2xl:h-80"
      ref={contentRef}
      initial="hidden"
      animate={animation}
      variants={scrollVariants}
      onMouseEnter={() => onCursor('hovered')}
      onMouseLeave={onCursor}
    >
      <Link href={`/expos/${expo.node._meta.uid}`}>
        <a>
          <div
            className="h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${expo.node.cover_photo.url})`
            }}
          >
            <div
              className="w-full h-full flex justify-start items-end p-2 lg:p-4 2xl:p-6 custom-card-title text-white hover:opacity-0 custom-animation"
              style={{ backgroundColor: `${expo.node.card_color}` }}
            >
              {expo.node.location[0].text}
            </div>
          </div>
        </a>
      </Link>
    </motion.li>
  );
};

export default Card;
